import SectionWrapper from '../components/sectionWrapper'
import { useRef,useState } from 'react'

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleOpenAbout = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.top - rect.height / 2 + window.scrollY,
        left: rect.left + rect.width / 2 + window.screenX
      });
    }
    setIsAboutOpen(true);
  };
  return (
    <SectionWrapper id="inicio" bgColor="bg-gradient-to-b from-blue-900 to-blue-700"
      textColor="text-white">
      <div className="w-full flex flex-col items-center justify-center text-center opacity-0 animate-fade-in-start">
        <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-4 border-gray-300 mb-6">
        <img
          src="/avatar.jpeg"
          alt="Avatar"
          className="w-full h-full object-contain"
        />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Emmanuel David Martinez Vidal
        </h1>

        <p className="text-xl md:text-2xl mb-6">
          Desarrollador Backend Jr. | Java • Microservicios • APIs REST
        </p>

        <button
          ref={buttonRef}
          onClick={handleOpenAbout}
          className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Sobre mí
        </button>
      </div>
      {isAboutOpen && (
        <div className="fixed inset-0 bg-none bg-opacity-90 flex items-center justify-center z-50">
          <div
            className="absolute bg-white p-6 rounded-xl shadow-lg animate-slide-from-button"
            style={{
              top: modalPosition.top,
              left: modalPosition.left,
              transform: 'translate(-50%, -50%)', // centrar horizontalmente sobre el botón
            }}
          >
            <h2 className="text-gray-700 text-2xl font-bold mb-4">Sobre mí</h2>
            <p className="text-gray-700 leading-relaxed">
              Soy Emmanuel David Martinez Vidal, desarrollador backend Jr. con enfoque en microservicios, Java y soluciones empresariales modernas. Me apasiona crear software robusto y eficiente, y actualmente me estoy formando continuamente en arquitectura de software y buenas prácticas de ingeniería.
            </p>
            <div className='p-3'>
              <button
                onClick={() => setIsAboutOpen(false)}
                className="text-gray-600 hover:text-red-500"
              >
                ✖
              </button>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}