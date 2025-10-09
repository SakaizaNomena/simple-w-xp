import React from 'react';
import {
  Code, Database, Server, Wrench, GitMerge, Box, FileCode, Terminal, Wind, 
  Atom, Library, DatabaseZap, Cpu, Bot, BrainCircuit, MessageCircle, CreditCard, Phone, 
  ServerCog, PenTool, Network
} from 'lucide-react';

export const iconMap: { [key: string]: React.ElementType } = {
  // Langages
  'TypeScript': FileCode,
  'PHP': FileCode,
  'Python': Code,
  'HTML/CSS': Code,
  'JavaScript': FileCode,
  'SQL': Database,

  // Frameworks
  'React': Atom,
  'React Native': Atom,
  'Symfony': Library,
  'FastAPI': Library,
  'Tailwind CSS': Wind,
  'SCSS': Wind,
  'Tauri': Box,
  'Vue.js': Atom,
  'Next.js': Atom,
  'API Platform': Library,
  'Bootstrap': Library,
  'Electron.js': Atom,

  // BDD
  'SQL Server': DatabaseZap,
  'MySQL': Database,
  'MongoDB': Database,
  'PostgreSQL': Database,
  'ElasticSearch': DatabaseZap,
  'Firebase': Database,

  // Outils
  'Stripe': CreditCard,
  'WebRTC': Phone,
  'ChatGPT API': Bot,
  'OpenAI': BrainCircuit,
  'TensorFlow.js': Cpu,
  'NLP': MessageCircle,
  'PayPal': CreditCard,
  'HelloAsso': CreditCard,
  'Sage': Wrench,

  // DevOps
  'Docker': Box,
  'Git': GitMerge,
  'Linux': Terminal,
  'Nginx': Server,
  'Apache': Server,
  'PM2': ServerCog,
  'CI/CD': ServerCog,

  // Autres
  'VPS': Server,
  'Figma': PenTool,
  'Merise': Network,
  'UML': Network,
  'Cisco': Network,
  'Windows Server': Server,
  'Proxy': Server,
  'Zustand': Library,
  'React Query': Library,
  'Mercure': Library,
};
