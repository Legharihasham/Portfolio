
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: string;
  image: string;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'professional' | 'leadership' | 'volunteer';
}

export interface Skill {
  category: string;
  items: string[];
}
