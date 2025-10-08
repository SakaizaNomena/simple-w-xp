import React from 'react';
import { Briefcase, Building2, Shapes } from 'lucide-react';
import { iconMap } from '../iconMap';

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
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 ml-12">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold border-b-2 border-gray-400 pb-1">{exp.poste}</h3>
                <div className="flex items-center text-gray-600 font-semibold my-1">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span>{exp.entreprise} | {exp.periode}</span>
                </div>
                <p className="mt-2">{exp.description}</p>
                <div className="mt-4 flex flex-wrap ml-6">
                  Technologie utilisée :
                  {exp.technologies.map(tech => {
                    // const Icon = iconMap[tech] || Shapes;
                    return (
                      <div key={tech} className="flex items-center bg-zinc-600 text-white px-2 py-1 rounded-full text-xs font-medium m-1">
                        {/* <Icon className="w-3 h-3 mr-1" /> */}
                        <span className='p-2 bg-zinc-200 rounded-full'>{tech}</span>
                      </div>
                    );
                  })} 
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