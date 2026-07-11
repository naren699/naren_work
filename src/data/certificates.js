/**
 * @typedef {Object} Certificate
 * @property {string} id
 * @property {string} title
 * @property {string} provider
 * @property {string} issuedYear
 * @property {string} credentialType
 * @property {string} category
 * @property {string} description
 * @property {string[]} skills
 * @property {string} credentialUrl
 * @property {'iris' | 'amber'} accent
 * @property {import('lucide-react').LucideIcon} icon
 */

import { BrainCircuit, Cpu, LayoutTemplate, Layers3, TerminalSquare, Zap } from 'lucide-react'

/** @type {Certificate[]} */
export const certificates = [
  {
    id: 'gpu-programming',
    title: 'GPU Programming',
    provider: 'Coursera',
    issuedYear: '2025',
    credentialType: 'Professional Certificate',
    category: 'GPU Computing',
    description: 'Core concepts of GPU architecture and parallel kernel design for high-throughput compute workloads.',
    skills: ['CUDA', 'GPU Programming', 'Parallel Computing', 'Kernel Optimization', 'Memory Management'],
    credentialUrl: 'https://coursera.org/share/28d2abd9f221c90819f906ac71de5eee',
    accent: 'amber',
    icon: Cpu,
  },
  {
    id: 'frontend-development',
    title: 'Introduction to Front-End Development',
    provider: 'Coursera',
    issuedYear: '2025',
    credentialType: 'Professional Certificate',
    category: 'Frontend Development',
    description: 'Foundational HTML, CSS, and JavaScript practices for building responsive, accessible web interfaces.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Frontend Fundamentals'],
    credentialUrl: 'https://coursera.org/share/b024026ec1cd9f1a236d143dc42c4aca',
    accent: 'iris',
    icon: LayoutTemplate,
  },
  {
    id: 'devops',
    title: 'Introduction to DevOps',
    provider: 'Coursera',
    issuedYear: '2025',
    credentialType: 'Professional Certificate',
    category: 'DevOps',
    description: 'Core DevOps principles covering CI/CD pipelines, automation, and collaborative delivery workflows.',
    skills: ['CI/CD', 'Git', 'Docker Basics', 'DevOps Workflow', 'Automation'],
    credentialUrl: 'https://coursera.org/share/c963370a2bdf1224dde8c4c84cb07eb3',
    accent: 'amber',
    icon: TerminalSquare,
  },
  {
    id: 'advanced-pytorch',
    title: 'Advanced PyTorch Techniques and Applications',
    provider: 'Coursera',
    issuedYear: '2025',
    credentialType: 'Professional Certificate',
    category: 'Deep Learning',
    description: 'Advanced model optimization, custom architectures, and applied deep learning workflows in PyTorch.',
    skills: ['PyTorch', 'Model Optimization', 'Deep Learning', 'Neural Networks', 'AI Model Deployment'],
    credentialUrl: 'https://coursera.org/share/7d4f051e33c98ad34f11779901149c31',
    accent: 'iris',
    icon: BrainCircuit,
  },
  {
    id: 'neural-networks-pytorch',
    title: 'Building and Training Neural Networks with PyTorch',
    provider: 'Coursera',
    issuedYear: '2025',
    credentialType: 'Professional Certificate',
    category: 'Deep Learning',
    description: 'Hands-on design, training, and evaluation of neural networks using the PyTorch framework.',
    skills: ['Neural Networks', 'Model Training', 'Backpropagation', 'PyTorch', 'Tensor Operations'],
    credentialUrl: 'https://coursera.org/share/6cbddf6c08932029ecaf9347c852225a',
    accent: 'amber',
    icon: BrainCircuit,
  },
  {
    id: 'cuda-parallel-programming',
    title: 'Introduction to Parallel Programming with CUDA',
    provider: 'Coursera',
    issuedYear: '2025',
    credentialType: 'Professional Certificate',
    category: 'CUDA Programming',
    description: 'Practical CUDA programming patterns for writing and optimizing parallel compute kernels on the GPU.',
    skills: ['CUDA', 'Parallel Programming', 'GPU Computing', 'Thread Optimization', 'Performance Computing'],
    credentialUrl: 'https://coursera.org/share/bd7db3814f32d2ccde7ec6e5130b6e60',
    accent: 'iris',
    icon: Zap,
  },
  {
    id: 'pytorch-foundations',
    title: 'Foundations and Core Concepts of PyTorch',
    provider: 'Coursera',
    issuedYear: '2025',
    credentialType: 'Professional Certificate',
    category: 'PyTorch',
    description: 'Fundamental tensor operations, autograd, and model-building blocks that underpin the PyTorch ecosystem.',
    skills: ['Tensor Operations', 'Autograd', 'Model Building', 'Deep Learning Basics', 'PyTorch'],
    credentialUrl: 'https://coursera.org/share/193e0c28ed56e7fce36185a65cdd8e25',
    accent: 'amber',
    icon: Layers3,
  },
]
