import { Bot, Braces, Layers3, Sparkles, TerminalSquare, Wallet, Zap } from 'lucide-react'
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from '../components/icons'

export const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'journey', label: 'Journey', path: '/journey' },
  { id: 'certifications', label: 'Certifications', path: '/certifications' },
  { id: 'technical-experience', label: 'Technical Experience', path: '/technical-experience' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

export const skillGroups = [
  { title: 'Languages', icon: Braces, detail: 'The foundations I use to turn ideas into working interfaces and logic.', skills: ['JavaScript', 'Java', 'Python', 'C'] },
  { title: 'Frontend', icon: Layers3, detail: 'Responsive, component-led interfaces built for real people and real screens.', skills: ['React', 'HTML', 'CSS', 'Responsive Design', 'State Management'] },
  { title: 'Cloud & Data', icon: Bot, detail: 'Practical building blocks for data-backed and AI-assisted web applications.', skills: ['Firebase', 'Firestore', 'Gemini API', 'API Integration'] },
  { title: 'Workflow', icon: TerminalSquare, detail: 'Tools and habits that keep project work structured, shareable, and shippable.', skills: ['Git', 'GitHub', 'GitLab', 'Linux', 'Full Stack Fundamentals'] },
]

export const projects = [
  {
    number: '01', title: 'Weather Prediction Application', eyebrow: 'Internship project · Straive', type: 'Frontend / Internship Project', date: 'Jun — Jul 2025', icon: Zap, accent: 'blue', previewStyle: 'weather-dashboard',
    role: 'Designed & Developed', status: 'Completed',
    pitch: 'A responsive weather experience that makes live location data easy to understand at a glance.',
    overview: 'Built during my Full Stack Development internship at Straive, this React application translates live weather API responses into a clean, responsive interface for selected locations.',
    problem: 'Weather data is only useful when it is clear. This project prioritizes the essential conditions people look for, with a UI that works comfortably from desktop to mobile.',
    features: ['Live weather API integration for selected locations', 'Temperature, humidity, wind speed, and condition reporting', 'Reusable React components and interactive UI states', 'Responsive layouts and careful API handling across screen sizes'],
    stack: [
      { label: 'React', icon: '⚛' },
      { label: 'JavaScript', icon: '🟨' },
      { label: 'Weather API', icon: '🌤' },
      { label: 'HTML', icon: '📄' },
      { label: 'CSS', icon: '🎨' },
    ],
    stats: [
      { label: 'Components', value: '8+' },
      { label: 'APIs Used', value: '1' },
      { label: 'Responsive', value: 'Yes' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    buildNotes: 'A hands-on internship build that strengthened my API integration, debugging, state management, and deployment workflow skills.',
    links: {
      github: 'https://github.com/naren699/Weather-App',
      live: 'https://weather-app-xi-rosy-44.vercel.app/',
    },
  },
  {
    number: '02', title: 'ExpenseFlow – Smart Expense Tracker', eyebrow: 'Full-stack personal finance platform', type: 'Full Stack Web Application', date: '2025 — Present', icon: Wallet, accent: 'emerald', previewStyle: 'finance-dashboard',
    role: 'Designed & Developed', status: 'Completed',
    pitch: 'A modern personal finance platform that helps users track expenses, manage budgets, visualize spending trends, and achieve financial goals through an intuitive dashboard.',
    overview: 'ExpenseFlow is a full-stack personal finance application built to simplify money management through a clean, responsive interface. Users can securely manage income and expenses, organize transactions by category, monitor budgets, and gain insights through interactive analytics. The application focuses on usability, real-time data updates, and scalable architecture.',
    problem: 'Managing personal finances should be simple and accessible. ExpenseFlow transforms raw financial data into meaningful insights, enabling users to understand spending habits, stay within budgets, and make informed financial decisions through clear visualizations and a streamlined user experience.',
    features: [
      'Secure user authentication using Firebase Authentication',
      'Real-time expense and income management with Firestore',
      'Interactive analytics dashboard with charts and spending insights',
      'Monthly budget planning and goal tracking',
      'Category-based transaction organization',
      'Responsive UI optimized for desktop, tablet, and mobile',
      'Dark and Light theme support',
      'Fast search, filtering, and sorting of transactions',
    ],
    stack: [
      { label: 'React', icon: '⚛' },
      { label: 'JavaScript', icon: '🟨' },
      { label: 'Firebase', icon: '🔥' },
      { label: 'Firestore', icon: '🗄' },
      { label: 'Firebase Auth', icon: '🔐' },
      { label: 'Tailwind CSS', icon: '🎨' },
      { label: 'Recharts', icon: '📊' },
      { label: 'Vite', icon: '⚡' },
    ],
    stats: [
      { label: 'Transactions', value: 'Unlimited' },
      { label: 'Categories', value: '10+' },
      { label: 'Analytics', value: 'Real-Time' },
      { label: 'Responsive', value: 'Yes' },
      { label: 'Authentication', value: 'Firebase' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    buildNotes: 'Built to turn everyday financial data into clear, actionable insight through a fast, secure, and fully responsive experience.',
    links: {
      github: 'https://github.com/naren699/exxpense-tracker',
      live: 'https://expenseone-eight.vercel.app/',
    },
  },
  {
    number: '03', title: 'AI Notes Summarizer', eyebrow: 'AI-powered productivity application', type: 'AI Productivity Tool', date: 'June 2026', icon: Sparkles, accent: 'purple', previewStyle: 'ai-dashboard',
    role: 'Designed & Developed', status: 'Completed',
    pitch: 'Turns long study material into clear, structured notes—so understanding takes less time.',
    overview: 'A learning-focused web application for simplifying dense text into concise, useful notes. The product pairs an approachable React experience with AI summarization and a cloud-backed workflow.',
    problem: 'Long source material can slow down revision. The app gives students a focused way to extract the important ideas without losing the flow of studying.',
    features: ['AI-powered text summarization through Gemini API', 'Clear, structured notes designed for fast review', 'Clean React interface built around a simple input-to-insight flow', 'Firebase and Firestore foundation for a cloud-backed application'],
    stack: [
      { label: 'React', icon: '⚛' },
      { label: 'Gemini API', icon: '🤖' },
      { label: 'Firebase', icon: '🔥' },
      { label: 'Firestore', icon: '🗄' },
      { label: 'HTML', icon: '📄' },
      { label: 'CSS', icon: '🎨' },
      { label: 'Vercel', icon: '▲' },
    ],
    stats: [
      { label: 'Components', value: '10+' },
      { label: 'APIs Used', value: '1' },
      { label: 'Database', value: 'Firestore' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    buildNotes: 'Designed as a modern, deployable web workflow that keeps the experience focused on learning—not setup.',
    links: {},
  },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/naren699', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/narendhiran-p06/', icon: LinkedinIcon },
  { label: 'LeetCode', href: 'https://leetcode.com/u/narendhiran_6/', icon: LeetcodeIcon },
]
