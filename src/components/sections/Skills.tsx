import React from 'react';
import { iconMap } from '../iconMap'; // Import the map
import { Shapes } from 'lucide-react'; // Keep fallback icon import

const skills = {
  'Langages de programmation': ['TypeScript', 'PHP', 'Python', 'HTML/CSS', 'JavaScript', 'SQL'],
  'Frameworks & Librairies': ['React', 'React Native', 'Symfony', 'FastAPI', 'Tailwind CSS', 'SCSS', 'Tauri', 'Vue.js', 'Next.js', 'API Platform'],
  'Bases de données': ['SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL', 'ElasticSearch', 'Firebase'],
  'Outils & Technologies': ['Stripe', 'WebRTC', 'ChatGPT API', 'OpenAI', 'TensorFlow.js', 'NLP'],
  'DevOps': ['Docker', 'Git', 'Linux', 'Nginx', 'Apache', 'PM2'],
  'Autres': ['VPS', 'Figma', 'Merise', 'UML'],
};

const Skills: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Compétences Techniques</h2>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map(skill => {
                  const Icon = iconMap[skill] || Shapes; // Fallback to a generic icon
                  return (
                    <div key={skill} className="flex items-center bg-gray-200 p-2 rounded-lg">
                      <Icon className="w-5 h-5 mr-2 text-gray-700" />
                      <span className="text-gray-800 text-sm font-medium">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
