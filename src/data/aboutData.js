import {
  BookOpen,
  Bot,
  BrainCircuit,
  ClipboardList,
  Code2,
  Cpu,
  Dumbbell,
  FileText,
  FlaskConical,
  Film,
  GraduationCap,
  Hammer,
  Layers3,
  Lightbulb,
  MonitorPlay,
  Network,
  Palette,
  PenTool,
  Quote,
  Rocket,
  Search,
  Server,
  Sparkles,
  Wand2,
} from 'lucide-react'

export const aboutIdentity = {
  eyebrow: 'About me',
  title: 'Building the useful layer between people and technology.',
  paragraphs: [
    "I'm Narendhiran P, a third-year B.Tech Artificial Intelligence & Data Science student focused on Full Stack Development and AI-powered web applications.",
    'I enjoy transforming ideas into practical products—combining clean user experiences, scalable engineering, and intelligent automation.',
  ],
  traits: [
    { label: 'Perspective', detail: 'Thinking from different angles before settling on one path' },
    { label: 'Approach', detail: 'Breaking complex challenges into manageable pieces' },
    { label: 'Method', detail: 'Finding efficient solutions over conventional ones' },
  ],
}

export const storySections = [
  {
    eyebrow: 'Motivation',
    title: 'Why Artificial Intelligence',
    icon: Bot,
    lead: 'AI excites me because it lets software become intelligent, efficient, and capable of handling repetitive work automatically.',
    body: 'Instead of replacing creativity, I see AI as a tool that helps developers focus on solving meaningful problems while reducing manual effort.',
    highlight: { label: 'Primary interest', value: 'AI Agents & intelligent automation' },
    points: ['Understand tasks', 'Make decisions', 'Automate workflows'],
  },
  {
    eyebrow: 'Origin story',
    title: 'Why I Started Building Software',
    icon: Code2,
    lead: 'My curiosity started by simply watching developers build complete applications from scratch.',
    body: 'That curiosity turned into a passion for software development—web development especially, seeing ideas become interactive products used by thousands.',
    highlight: null,
    points: ['Solving real-world problems', 'Building complete products', 'Designing modern interfaces', 'Learning new technologies', 'Improving existing systems'],
  },
]

export const workflowSteps = [
  { label: 'Idea', icon: Lightbulb },
  { label: 'Research', icon: Search },
  { label: 'Planning', icon: ClipboardList },
  { label: 'Wireframing', icon: PenTool },
  { label: 'UI Design', icon: Palette },
  { label: 'Frontend', icon: Code2 },
  { label: 'Backend', icon: Server },
  { label: 'Testing', icon: FlaskConical },
  { label: 'Deployment', icon: Rocket },
]

export const focusAreas = [
  { label: 'AI-powered Applications', icon: Bot },
  { label: 'Machine Learning', icon: BrainCircuit },
  { label: 'Low-Level System Design', icon: Cpu },
  { label: 'High-Level System Design', icon: Network },
  { label: 'UI Animations', icon: Sparkles },
  { label: 'Full Stack Architecture', icon: Layers3 },
]

export const learningMethods = {
  title: 'Learning Philosophy',
  eyebrow: 'How I learn',
  description: 'I believe the fastest way to learn technology is by building real projects. Every project teaches something new.',
  items: [
    { label: 'Building practical applications', icon: Hammer },
    { label: 'Reading official documentation', icon: BookOpen },
    { label: 'Exploring technical articles', icon: FileText },
    { label: 'Technical talks & videos', icon: MonitorPlay },
    { label: 'Professional online courses', icon: GraduationCap },
    { label: 'Experimenting with AI tools', icon: Wand2 },
  ],
}

export const interests = {
  title: 'Beyond Development',
  eyebrow: 'Outside of code',
  description: 'Interests that keep me disciplined, curious, and constantly growing—on and off the keyboard.',
  items: [
    { label: 'Going to the gym', icon: Dumbbell },
    { label: 'Tech & business podcasts', icon: MonitorPlay },
    { label: 'Watching movies', icon: Film },
    { label: 'Following startup ecosystems', icon: Rocket },
    { label: 'Exploring new AI tools', icon: Wand2 },
  ],
}

export const philosophy = {
  icon: Quote,
  quote: 'I enjoy building software that solves real problems through thoughtful design, scalable engineering, and intelligent automation.',
  description: 'My goal is not simply to build applications but to create products that are practical, efficient, intuitive, and enjoyable to use.',
}
