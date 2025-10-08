import React from 'react';
import { GraduationCap } from 'lucide-react';

const formations = [
  {
    diplome: 'Master - Génie logiciel et Base de Données',
    etablissement: 'Centre National de télé-enseignement de Madagascar',
    annee: '2019',
    details: [
      'Formation axée sur le développement de logiciels et la gestion de bases de données',
      'Administration des serveurs et réseaux (Linux, Windows)',
      "Projets pratiques : conception d'applications web et configuration d'infrastructure",
    ],
  },
  {
    diplome: "Licence en Électronique et Informatique Appliquée",
    etablissement: "École Supérieure Polytechnique d'Antananarivo",
    annee: '2017',
    details: [
      'Spécialisation en programmation et administration de systèmes',
      'Conception de systèmes électroniques',
    ],
  },
];

const Education: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Formations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formations.map((formation, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-2">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                <h3 className="text-xl font-bold">{formation.diplome}</h3>
              </div>
              <p className="text-gray-600 font-semibold pl-9">{formation.etablissement} - {formation.annee}</p>
              <ul className="mt-4 list-disc list-inside text-gray-700 pl-9">
                {formation.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
