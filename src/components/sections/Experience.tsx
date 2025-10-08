import React from 'react';
import { Briefcase, Building2 } from 'lucide-react';

const experiences = [
  {
    poste: 'Développeur Front-end',
    entreprise: 'Bifora (Full remote)',
    periode: 'Décembre 2024 - Présent',
    description: 'Développement front-end sur le projet Izolearn',
    technologies: ['Next.js', 'Tailwind CSS', 'Zustand', 'React Query', 'TypeScript'],
  },
  {
    poste: 'Développeur Full-stack',
    entreprise: 'MyDevZone (Full remote)',
    periode: 'Décembre 2022 - Novembre 2024',
    description: "Création d'applications mobiles performantes et de sites web",
    technologies: ['Symfony', 'API Platform', 'Stripe', 'React', 'React Native', 'Firebase', 'Mercure', 'Bootstrap', 'Docker', 'CI/CD', 'Nginx'],
  },
  {
    poste: 'Développeur JavaScript et Symfony',
    entreprise: "Newman's Technology (CDD)",
    periode: 'Juillet 2022 - Janvier 2023',
    description: "Participation à la conception et au développement d'un grand projet immobilier",
    technologies: ['Symfony', 'API Platform', 'Stripe', 'React', 'React Native', 'Firebase', 'Mercure', 'Bootstrap', 'Docker', 'CI/CD', 'PayPal', 'HelloAsso', 'Vue.js'],
  },
  {
    poste: 'Développeur JavaScript et DevOps',
    entreprise: 'Mellis (Part Time)',
    periode: 'Juin 2020 - Mai 2022',
    description: "Développement d'applications (Electron.js) et administration des serveurs",
    technologies: ['Electron.js', 'Cisco', 'Windows Server', 'Nginx', 'Apache', 'Proxy', 'Sage', 'SQL Server', 'Linux'],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Expériences Professionnelles</h2>
        <div className="relative border-l-4 border-gray-200">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 ml-12">
              <div className="absolute -left-5 mt-1 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center border-4 border-white">
                <Briefcase size={20} />
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{exp.poste}</h3>
                <div className="flex items-center text-gray-600 font-semibold my-1">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span>{exp.entreprise} | {exp.periode}</span>
                </div>
                <p className="mt-2">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
