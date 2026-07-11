import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Loader from './components/Loader/Loader'
import SmoothScrollProvider from './components/SmoothScrollProvider'
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import JourneyPage from './pages/JourneyPage'
import CertificationsPage from './pages/CertificationsPage'
import TechnicalExperiencePage from './pages/TechnicalExperiencePage'
import ContactPage from './pages/ContactPage'
import { usePageLoader } from './hooks/usePageLoader'

function AppRoutes() {
  const { loading, duration, loadId } = usePageLoader()

  return (
    <SmoothScrollProvider>
      <AnimatePresence>
        {loading && <Loader key={loadId} duration={duration} />}
      </AnimatePresence>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/technical-experience" element={<TechnicalExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </SmoothScrollProvider>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
