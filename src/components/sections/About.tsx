import React from 'react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="p-4 text-black">
      <h1 className="text-4xl font-bold text-center font-sans">SAHAZA NOMENA</h1>
      <div className="text-center my-4">
        <p>+261 33 62 281 13 | sahazanomena@gmail.com | Madagascar</p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1">À Propos de Moi</h2>
        <p className="mt-2 text-lg">
          Développeur passionné et autodidacte, je m'adapte rapidement aux nouvelles 
          technologies. J'utilise des outils d'IA comme Claude pour optimiser la 
          productivité et accélérer l'innovation.
        </p>
      </div>
      <div className="text-center mt-8">
        <a 
          href="/resume/sahaza_resume.pdf" 
          download="sahaza_resume.pdf"
          className="inline-flex items-center bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          <Download className="w-5 h-5 mr-2" />
          Télécharger le CV
        </a>
      </div>
    </div>
  );
};

export default About;
