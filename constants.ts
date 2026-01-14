
import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'university-ai',
    title: 'University AI Assistant',
    description: 'A custom ChatGPT-like system optimized for academic and institutional queries.',
    tags: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Gemini API'],
    problem: 'Students struggled to navigate complex university data, rules, and course info across multiple PDFs and sites.',
    solution: 'Engineered a RAG (Retrieval-Augmented Generation) pipeline that handles broken English and Urdu transliteration.',
    impact: 'Deployed for students & faculty, providing 24/7 instant support with 90%+ accuracy on local data.',
    image: 'https://picsum.photos/seed/univ-ai/800/600'
  },
  {
    id: 'cybersec-monitor',
    title: 'Cybersecurity Monitoring System',
    description: 'Real-time network traffic analyzer and threat detection platform.',
    tags: ['Flask', 'Python', 'Networking', 'Security'],
    problem: 'Need for a localized, lightweight network monitor that could detect malicious URL patterns and suspicious traffic.',
    solution: 'Built a multi-threaded monitoring service with a Flask-based dashboard for real-time visualization.',
    impact: 'Successfully implemented URL filtering and threat response hooks for local network security.',
    image: 'https://picsum.photos/seed/security/800/600'
  },
  {
    id: 'ai-automation',
    title: 'AI Productivity Suite',
    description: 'A collection of micro-tools integrated with cutting-edge LLMs like Gemini and Mixtral.',
    tags: ['Gemini API', 'Mistral', 'Automation', 'LLMs'],
    problem: 'Manual workflows for content summarization and performance logging were time-consuming.',
    solution: 'Created automated agents for logging, analytics, and intelligent content processing.',
    impact: 'Increased workflow efficiency by 40% through intelligent prompt engineering and task automation.',
    image: 'https://picsum.photos/seed/productivity/800/600'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'ibex',
    company: 'ibex. Pakistan',
    role: 'Technical Support Specialist',
    period: '2025 — Present',
    description: [
      'Providing high-tier technical support and complex problem resolution.',
      'Analyzing system logs and customer workflows to optimize service delivery.'
    ],
    type: 'professional'
  },
  {
    id: 'erudite',
    company: 'Erudite Coaching Centre',
    role: 'Director of Management',
    period: '2023 — 2024',
    description: [
      'Overseeing daily operations and strategic planning for educational programs.',
      'Managed a team of 15+ staff members and coordinated with 200+ students.'
    ],
    type: 'leadership'
  },
  {
    id: 'clc',
    company: 'Creative Leadership Conference',
    role: 'Head / Ambassador',
    period: '2023',
    description: [
      'Represented the organization in major leadership summits across Pakistan.',
      'Led event management teams for conferences with 500+ attendees.'
    ],
    type: 'leadership'
  },
  {
    id: 'volunteer',
    company: 'Pakistan Volunteer Network',
    role: 'Senior Volunteer',
    period: '2022 — Present',
    description: [
      'Actively working on youth empowerment and women educational access initiatives.',
      'Leading community outreach programs in Lahore and surrounding areas.'
    ],
    type: 'volunteer'
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'AI & LLM',
    items: ['LangChain', 'OpenAI SDK', 'Gemini API', 'Vector DBs (FAISS)', 'Prompt Engineering', 'RAG Pipelines']
  },
  {
    category: 'Backend & Dev',
    items: ['Python', 'Streamlit', 'Flask', 'REST APIs', 'System Design', 'SQL']
  },
  {
    category: 'Cybersecurity',
    items: ['Network Monitoring', 'Threat Detection', 'URL Filtering', 'Penetration Testing Basics']
  },
  {
    category: 'Soft Skills',
    items: ['Leadership', 'Technical Support', 'Project Management', 'Communication']
  }
];
