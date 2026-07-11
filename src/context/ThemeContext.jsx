import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

const STORAGE_KEY = 'theme'

function applyTheme(theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.style.colorScheme = theme
}

/** Initial theme comes from the pre-paint inline script (data-theme on <html>). */
function getInitialTheme() {
  if (typeof document !== 'undefined') {
    const current = document.documentElement.dataset.theme
    if (current === 'light' || current === 'dark') return current
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }
  return 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  // Follow the OS preference until the user makes an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (event) => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) setThemeState(event.matches ? 'light' : 'dark')
      } catch {
        setThemeState(event.matches ? 'light' : 'dark')
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const setTheme = useCallback((next) => {
    setThemeState((prev) => {
      const value = next === 'light' || next === 'dark' ? next : prev
      try {
        localStorage.setItem(STORAGE_KEY, value)
      } catch {
        /* ignore persistence failures (private mode, etc.) */
      }
      return value
    })
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const value = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, value)
      } catch {
        /* ignore */
      }
      return value
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
