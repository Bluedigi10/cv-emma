import type { Dispatch, SetStateAction } from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

export default function Header({ activeSection, setActiveSection }: NavbarProps) {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-center space-x-6">
        <button 
          onClick={() => setActiveSection('home')} 
          className={`px-4 py-2 rounded ${activeSection === 'home' ? 'bg-blue-800' : ''}`}
        >
          Inicio
        </button>
        <button 
          onClick={() => setActiveSection('experience')}
          className={`px-4 py-2 rounded ${activeSection === 'experience' ? 'bg-blue-800' : ''}`}
        >
          Experiencia
        </button>
        <button 
          onClick={() => setActiveSection('certificates')}
          className={`px-4 py-2 rounded ${activeSection === 'certificates' ? 'bg-blue-800' : ''}`}
        >
          Certificados
        </button>
      </div>
    </nav>
  )
}