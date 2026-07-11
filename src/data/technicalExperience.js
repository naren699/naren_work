/**
 * @typedef {'Hackathon' | 'Datathon' | 'AI Competition' | 'Technical Event'} EventType
 *
 * @typedef {Object} TechnicalEvent
 * @property {string} id
 * @property {string} title
 * @property {string} organization
 * @property {EventType} type
 * @property {string} year
 * @property {string} description
 * @property {string[]} skills
 * @property {string} status
 */

import { Bot, Database, Flag, Trophy } from 'lucide-react'
import { BrainCircuit, Lightbulb, Puzzle, Rocket, Sparkles, Users } from 'lucide-react'

export const eventTypeMeta = {
  Hackathon: { icon: Trophy, accent: 'iris' },
  Datathon: { icon: Database, accent: 'amber' },
  'AI Competition': { icon: Bot, accent: 'iris' },
  'Technical Event': { icon: Flag, accent: 'amber' },
}

/** @type {TechnicalEvent[]} */
export const technicalEvents = [
  {
    id: 'doctor-developer-hackathon',
    title: 'Doctor Developer Hackathon',
    organization: 'E-Summit 2026, E-Cell SRMIST',
    type: 'Hackathon',
    year: '2026',
    description:
      'Participated in a healthcare-focused hackathon centered on building technology-driven solutions for real-world medical challenges. Contributed to problem analysis, solution architecture, feasibility evaluation, rapid ideation, and collaborative engineering under strict time constraints.',
    skills: ['Healthcare Innovation', 'Problem Analysis', 'Solution Architecture', 'Team Collaboration', 'Rapid Prototyping'],
    status: 'Participated',
  },
  {
    id: 'ibm-z-datathon',
    title: 'IBM Z Datathon 2025',
    organization: 'IBM',
    type: 'Datathon',
    year: '2025',
    description:
      "Participated in IBM's global datathon focused on analytical thinking and data-driven problem solving. Worked on understanding datasets, identifying meaningful insights, structured reasoning, and collaborative decision-making within a competitive environment.",
    skills: ['Data Analysis', 'Analytical Thinking', 'Data Interpretation', 'Problem Solving', 'Teamwork'],
    status: 'Participated',
  },
  {
    id: 'threx-hackathon',
    title: 'THREX Hackathon',
    organization: 'THREX',
    type: 'Hackathon',
    year: '2025',
    description:
      'Focused on AI-driven solution development, backend workflow design, prompt engineering, rapid prototyping, and iterative problem solving while working within limited development time.',
    skills: ['AI', 'Backend Logic', 'Prompt Engineering', 'Rapid Prototyping', 'Workflow Design'],
    status: 'Participated',
  },
  {
    id: 'prompt-a-thon',
    title: 'Prompt-a-thon',
    organization: "TechnoVIT'25, VIT Chennai",
    type: 'AI Competition',
    year: '2025',
    description:
      'Participated in a prompt engineering competition emphasizing problem framing, AI-assisted reasoning, workflow optimization, and practical application of generative AI technologies.',
    skills: ['Prompt Engineering', 'Generative AI', 'Reasoning', 'AI Workflow', 'Problem Framing'],
    status: 'Participated',
  },
  {
    id: 'bytebeat-2025',
    title: 'ByteBeat 2025',
    organization: 'SRM Institute of Science and Technology',
    type: 'Technical Event',
    year: '2025',
    description:
      'Participated in technical challenges including Capture the Flag (CTF), problem solving, and collaborative engineering activities, strengthening analytical thinking, teamwork, and rapid decision-making skills.',
    skills: ['Capture The Flag', 'Problem Solving', 'Cybersecurity Basics', 'Technical Collaboration'],
    status: 'Participated',
  },
]

/**
 * Animated count-up hero stats. `value` is numeric; `suffix` is appended after the counter.
 * @type {{ label: string, value: number, suffix?: string, icon: import('lucide-react').LucideIcon }[]}
 */
export const experienceStats = [
  { label: 'Technical Events', value: 5, suffix: '+', icon: Trophy },
  { label: 'Hackathons', value: 3, icon: Bot },
  { label: 'Datathon', value: 1, icon: Database },
  { label: 'AI Competition', value: 1, icon: Sparkles },
]

/**
 * Technical Growth cards shown after the timeline.
 * @type {{ title: string, description: string, icon: import('lucide-react').LucideIcon, accent: 'iris' | 'amber' }[]}
 */
export const growthAreas = [
  {
    title: 'Problem Solving',
    icon: Puzzle,
    accent: 'iris',
    description: 'Breaking complex challenges into clear, structured pieces and solving them efficiently under real time pressure.',
  },
  {
    title: 'Rapid Learning',
    icon: Rocket,
    accent: 'amber',
    description: 'Absorbing unfamiliar tools and concepts quickly to design, build, and ship within tight competition timelines.',
  },
  {
    title: 'Team Collaboration',
    icon: Users,
    accent: 'iris',
    description: 'Aligning with teammates on ideas, dividing work effectively, and executing together toward a single goal.',
  },
  {
    title: 'AI Engineering',
    icon: BrainCircuit,
    accent: 'amber',
    description: 'Designing intelligent workflows, prompts, and automation that turn AI into practical problem-solving tools.',
  },
  {
    title: 'Product Thinking',
    icon: Lightbulb,
    accent: 'iris',
    description: 'Transforming raw ideas into practical, user-focused products that solve genuine real-world problems.',
  },
]
