import React from 'react';
import { Code, Library, Database, Wrench, Server, Shapes } from 'lucide-react';

const skills = {
  'Langages de programmation': ['TypeScript', 'PHP', 'Python', 'HTML/CSS', 'JavaScript', 'SQL'],
  'Frameworks & Librairies': ['React', 'React Native', 'Symfony', 'FastAPI', 'Tailwind CSS', 'SCSS', 'Tauri', 'Vue.js', 'Next.js', 'API Platform'],
  'Bases de données': ['SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL', 'ElasticSearch', 'Firebase'],
  'Outils & Technologies': ['Paiement: Stripe', 'Communication: WebRTC', 'AI/ML: ChatGPT API, OpenAI, TensorFlow.js, NLP'],
  'DevOps': ['Docker', 'Git', 'Linux', 'Nginx', 'Apache', 'PM2'],
  'Autres': ['Hébergement: VPS', 'Conception: Figma, Merise, UML'],
};

const iconMap: { [key: string]: React.ElementType } = {
  'Langages de programmation': Code,
  'Frameworks & Librairies': Library,
  'Bases de données': Database,
  'Outils & Technologies': Wrench,
  'DevOps': Server,
  'Autres': Shapes,
};

const Skills: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Compétences Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => {
            const Icon = iconMap[category];
            return (
              <div key={category} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {Icon && <Icon className="w-6 h-6 mr-3 text-blue-600" />}
                  <h3 className="text-xl font-bold text-gray-800">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
