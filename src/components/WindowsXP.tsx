import React, { useState, useEffect, useRef } from 'react';
import { User, Code, Briefcase, GraduationCap, Contact as ContactIcon, Send } from 'lucide-react';
import './WindowsXP.css';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import ContactForm from './sections/ContactForm';
import StartMenu from './StartMenu';

const viewItems = [
  { id: 'about', name: 'À Propos', icon: User },
  { id: 'skills', name: 'Compétences', icon: Code },
  { id: 'experience', name: 'Expériences', icon: Briefcase },
  { id: 'education', name: 'Formations', icon: GraduationCap },
  { id: 'contact', name: 'Contact', icon: ContactIcon },
  { id: 'contact-form', name: 'Me Contacter', icon: Send },
] as const;

const WindowsXP: React.FC = () => {
  const [isClosed, setClosed] = useState(false);
  const [isMinimized, setMinimized] = useState(false);
  const [isMaximized, setMaximized] = useState(false);
  const [view, setView] = useState<typeof viewItems[number]['id']>('about');
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [isShuttingDown, setIsShuttingDown] = useState(false);
  const [shutdownComplete, setShutdownComplete] = useState(false);
  const startMenuRef = useRef<HTMLDivElement>(null);
  const startButtonRef = useRef<HTMLDivElement>(null);

  const handleSetView = (newView: typeof view) => {
    setView(newView);
    setClosed(false);
    setMinimized(false);
    setStartMenuOpen(false);
  };

  const handleShutdown = () => {
    setStartMenuOpen(false);
    setIsShuttingDown(true);
    setTimeout(() => {
      setShutdownComplete(true);
    }, 3000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        startMenuRef.current && !startMenuRef.current.contains(event.target as Node) &&
        startButtonRef.current && !startButtonRef.current.contains(event.target as Node)
      ) {
        setStartMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'skills': return <Skills />;
      case 'experience': return <Experience />;
      case 'education': return <Education />;
      case 'contact': return <Contact />;
      case 'contact-form': return <ContactForm />;
      case 'about':
      default:
        return (
          <div className="p-4 text-black">
            <h1 className="text-4xl font-bold text-center font-sans">SAHAZA NOMENA</h1>
            <div className="text-center my-4"><p>+261 33 62 281 13 | sahazanomena@gmail.com | Madagascar</p></div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold border-b-2 border-gray-400 pb-1">À Propos de Moi</h2>
              <p className="mt-2 text-lg">Développeur passionné et autodidacte, je m'adapte rapidement aux nouvelles technologies. J'utilise des outils d'IA comme Claude pour optimiser la productivité et accélérer l'innovation.</p>
            </div>
          </div>
        );
    }
  };

  const getTitle = () => {
    return viewItems.find(item => item.id === view)?.name || 'À Propos de Moi';
  };

  if (shutdownComplete) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-mono">Merci pour votre visite !</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#3A6EA5] flex items-center justify-center overflow-hidden">
      {isShuttingDown && (
        <div className="fixed inset-0 bg-blue-900 text-white flex flex-col items-center justify-center z-50">
          <p className="text-lg">Fermeture de Windows en cours...</p>
        </div>
      )}
      <div className="desktop-scene">
        <div className="monitor">
          <div className="screen">
            <div className="wallpaper"></div>
            <div className="desktop-icons">
              {viewItems.map(item => (
                <div key={item.id} className="icon" onClick={() => handleSetView(item.id)}>
                  <item.icon size={32} />
                  <span>{item.name}</span>
                </div>
              ))}
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
                <div className="window-body">{renderContent()}</div>
              </div>
            )}
            <div className="taskbar">
              <div className="start-button" ref={startButtonRef} onClick={() => setStartMenuOpen(!startMenuOpen)}>
                <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }}>
                  <rect fill="#f34f1c" x="0" y="0" width="7" height="7"/>
                  <rect fill="#85c222" x="8" y="0" width="7" height="7"/>
                  <rect fill="#00a3ee" x="0" y="8" width="7" height="7"/>
                  <rect fill="#ffb900" x="8" y="8" width="7" height="7"/>
                </svg>
                <span className="font-bold italic">démarrer</span>
              </div>
              {view && !isClosed && isMinimized && (
                <div className="taskbar-tab" onClick={() => setMinimized(false)}>{getTitle()}</div>
              )}
              {startMenuOpen && (
                <div ref={startMenuRef}>
                  <StartMenu 
                    //@ts-ignore
                    views={viewItems}
                    onSelectView={handleSetView}
                    onShutdown={handleShutdown}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="monitor-stand"></div>
        <div className="desk"></div>
      </div>
    </div>
  );
};

export default WindowsXP;
