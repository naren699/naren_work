export function GithubIcon({ size = 18, className = '' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.5 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.31 9.31 0 0 1 12 6.96c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .28.18.61.69.5A10.16 10.16 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" /></svg>
}

export function LinkedinIcon({ size = 18, className = '' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M6.94 8.98H3.78V20h3.16V8.98ZM5.36 4a1.83 1.83 0 1 0 0 3.66 1.83 1.83 0 0 0 0-3.66Zm14.86 9.68c0-3.03-1.62-4.44-3.78-4.44a3.26 3.26 0 0 0-2.95 1.62h-.04V8.98h-3.03V20h3.16v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.64 1.78 2.92V20h3.16v-6.32h-.35Z" /></svg>
}

export function LeetcodeIcon({ size = 18, className = '' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M13.48 2.06 6.87 8.94a2.6 2.6 0 0 0-.72 1.79 2.6 2.6 0 0 0 .72 1.8l4.53 4.7a1.66 1.66 0 0 0 2.39 0 1.75 1.75 0 0 0 0-2.43l-3.5-3.63 5.53-5.75a1.75 1.75 0 0 0 0-2.43 1.66 1.66 0 0 0-2.34.07Zm-2.3 12.9-1.95-2.02a.85.85 0 0 0-1.22 0 .89.89 0 0 0 0 1.24l2.6 2.7a3.14 3.14 0 0 0 4.53 0l2.2-2.28a.89.89 0 0 0 0-1.24.85.85 0 0 0-1.22 0l-2.2 2.28a1.4 1.4 0 0 1-2.74-.68Zm-2.75-1.6h6.94a.94.94 0 0 0 0-1.88H8.43a.94.94 0 0 0 0 1.88Z" /></svg>
}

export function CpuIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="7" y="7" width="10" height="10" rx="1.4" />
      <rect x="10" y="10" width="4" height="4" rx="0.6" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  )
}
