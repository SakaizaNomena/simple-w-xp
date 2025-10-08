import React, { useState } from 'react';
import { User, Code, Briefcase, GraduationCap } from 'lucide-react';
import './WindowsXP.css';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';

const WindowsXP: React.FC = () => {
  const [isClosed, setClosed] = useState(false); 
  const [isMinimized, setMinimized] = useState(false);
  const [isMaximized, setMaximized] = useState(false);
  const [view, setView] = useState<'about' | 'skills' | 'experience' | 'education'>('about');

  const handleSetView = (newView: typeof view) => {
    setView(newView);
    setClosed(false);
    setMinimized(false);
  };

  const renderContent = () => {
    switch (view) {
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'about':
      default:
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
          </div>
        );
    }
  };
  
  const getTitle = () => {
    switch (view) {
      case 'skills':
        return 'Compétences';
      case 'experience':
        return 'Expériences';
      case 'education':
        return 'Formations';
      case 'about':
      default:
        return 'À Propos de Moi';
    }
  };

  return (
    <div className="min-h-screen bg-[#3A6EA5] flex items-center justify-center">
      <div className="monitor">
        <div className="screen">
          <div className="wallpaper"></div>
          <div className="desktop-icons">
            <div className="icon" onClick={() => handleSetView('about')}>
              <User size={32} />
              <span>À Propos</span>
            </div>
            <div className="icon" onClick={() => handleSetView('skills')}>
              <Code size={32} />
              <span>Compétences</span>
            </div>
            <div className="icon" onClick={() => handleSetView('experience')}>
              <Briefcase size={32} />
              <span>Expériences</span>
            </div>
            <div className="icon" onClick={() => handleSetView('education')}>
              <GraduationCap size={32} />
              <span>Formations</span>
            </div>
          </div>
          {!isClosed && (
            <div className={`window ${isMaximized ? 'maximized' : ''} ${isMinimized ? 'minimized' : ''}`}>
              <div className="title-bar" onDoubleClick={() => setMaximized(!isMaximized)}>
                <div className="title-text">{getTitle()}</div>
                <div className="title-buttons">
                  <div className="win-button" onClick={() => setMinimized(true)}>_</div>
                  <div className="win-button" onClick={() => setMaximized(!isMaximized)}>[]</div>
                  <div className="win-button close" onClick={() => setClosed(true)}>X</div>
                </div>
              </div>
              <div className="window-body">
                {renderContent()}
              </div>
            </div>
          )}
          <div className="taskbar">
            <div className="start-button" onClick={() => { /* Maybe this should open a menu? For now, does nothing */ }}>
              <span className="font-bold italic">démarrer</span>
            </div>
            {view && !isClosed && isMinimized && (
              <div className="taskbar-tab" onClick={() => setMinimized(false)}>
                {getTitle()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowsXP;
