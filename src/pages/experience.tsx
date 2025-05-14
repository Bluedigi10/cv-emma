import SectionWrapper from '../components/sectionWrapper'
import type { Experience } from '../types/type'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const experiencias: Experience[] = [
  {
    id: 1,
    position: '1 Desarrollador Backend Jr.',
    company: 'Empresa Tech S.A.',
    description: 'Desarrollo y mantenimiento de microservicios con Java y Spring Boot.',
    startDate: '2023-03',
    endDate: '2024-10',
    location: 'CDMX, México',
    technologies: ['Java', 'Spring Boot', 'REST', 'Git'],
  },
  {
    id: 2,
    position: '2 Practicante en Desarrollo de Software',
    company: 'Startup ABC',
    description: 'Apoyé en el desarrollo de componentes para el frontend y backend.',
    startDate: '2022-06',
    endDate: '2022-12',
    location: 'Remoto',
    technologies: ['JavaScript', 'React', 'Node.js'],
  },
  {
    id: 3,
    position: '3 Practicante en Desarrollo de Software',
    company: 'Startup ABC',
    description: 'Apoyé en el desarrollo de componentes para el frontend y backend.',
    startDate: '2022-06',
    endDate: '2022-12',
    location: 'Remoto',
    technologies: ['JavaScript', 'React', 'Node.js'],
  },
  {
    id: 4,
    position: '4 Practicante en Desarrollo de Software',
    company: 'Startup ABC',
    description: 'Apoyé en el desarrollo de componentes para el frontend y backend.',
    startDate: '2022-06',
    endDate: '2022-12',
    location: 'Remoto',
    technologies: ['JavaScript', 'React', 'Node.js'],
  },
  {
    id: 5,
    position: '5 Practicante en Desarrollo de Software',
    company: 'Startup ABC',
    description: 'Apoyé en el desarrollo de componentes para el frontend y backend.',
    startDate: '2022-06',
    endDate: '2022-12',
    location: 'Remoto',
    technologies: ['JavaScript', 'React', 'Node.js'],
  },
];

function formatFecha(fecha: string | undefined): string {
  if (!fecha) return 'Presente';
  const [year, month] = fecha.split('-');
  return `${month}/${year}`;
}

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);
  return (
    <SectionWrapper id="experiencia" bgColor="bg-gradient-to-b from-blue-900 to-blue-700">
      <div className="w-full opacity-0 animate-fade-in-start">
        <h2 className="text-white text-3xl font-bold mb-12 text-center">Experiencia</h2>

        <ul className="space-y-12 flex flex-col items-center">
          {experiencias.map((exp) => (
            <li
              data-aos="fade-up"
              key={exp.id}
              className="bg-gray-50 shadow-md rounded-lg p-6 w-full max-w-2xl text-center"
            >
              <h3 className="text-xl font-semibold text-blue-800">
                {exp.position} — {exp.company}
              </h3>
              <p className="text-sm text-gray-600 italic my-2">
                {formatFecha(exp.startDate)} – {formatFecha(exp.endDate)} · {exp.location}
              </p>
              <p className="mb-4">{exp.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}