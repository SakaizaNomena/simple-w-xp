import React from 'react';
import { User, Code, Briefcase, GraduationCap, Contact, Send, Power } from 'lucide-react';

// Define the type for a view item
interface ViewItem {
  id: 'about' | 'skills' | 'experience' | 'education' | 'contact' | 'contact-form';
  name: string;
  icon: React.ElementType;
}

// Define the props for the StartMenu component
interface StartMenuProps {
  onSelectView: (viewId: ViewItem['id']) => void;
  onShutdown: () => void;
  views: ViewItem[];
}

const StartMenu: React.FC<StartMenuProps> = ({ onSelectView, onShutdown, views }) => {
  return (
    <div className="start-menu">
      <div className="start-menu-header">
        <User size={48} className="p-2 bg-white rounded-md" />
        <span className="ml-4 font-bold text-white text-lg">SAHAZA NOMENA</span>
      </div>
      <div className="start-menu-body">
        <div className="start-menu-left">
          {views.map(view => (
            <div key={view.id} className="menu-item-main" onClick={() => onSelectView(view.id)}>
              <view.icon className="w-8 h-8 mr-3" />
              <span>{view.name}</span>
            </div>
          ))}
        </div>
        <div className="start-menu-right">
          {/* Right column can be used for other system-like folders if needed */}
        </div>
      </div>
      <div className="start-menu-footer">
        <button className="shutdown-button" onClick={onShutdown}>
          <Power className="w-5 h-5 mr-2" />
          Arrêter l'ordinateur
        </button>
      </div>
      <style>{`
        .start-menu {
          position: absolute;
          bottom: 30px; /* Height of the taskbar */
          left: 0;
          width: 400px;
          height: 500px;
          background: linear-gradient(to bottom, #0058C6, #3C87E8);
          border: 2px solid #0058C6;
          border-radius: 10px 10px 0 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: 'Tahoma', sans-serif;
        }
        .start-menu-header {
          background: linear-gradient(to bottom, #0a75f7, #0058C6);
          padding: 10px;
          display: flex;
          align-items: center;
        }
        .start-menu-body {
          flex-grow: 1;
          display: flex;
          background: white;
        }
        .start-menu-left {
          width: 60%;
          padding: 5px;
        }
        .start-menu-right {
          width: 40%;
          background: #D4E8FF;
          border-left: 1px solid #99B4D1;
        }
        .menu-item-main {
          display: flex;
          align-items: center;
          padding: 8px;
          cursor: pointer;
        }
        .menu-item-main:hover {
          background: #316ac5;
          color: white;
        }
        .start-menu-footer {
          background: linear-gradient(to top, #0a75f7, #0058C6);
          padding: 8px;
          display: flex;
          justify-content: flex-end;
        }
        .shutdown-button {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          color: white;
          font-size: 1rem;
          cursor: pointer;
        }
        .shutdown-button:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default StartMenu;
