import SectionWrapper from '../components/sectionWrapper';

export default function Home() {
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

        <a
          href="#certificados"
          className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Ver certificados
        </a>
      </div>
    </SectionWrapper>
  );
}