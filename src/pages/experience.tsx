import SectionWrapper from '../components/sectionWrapper';
import type { Experience } from '../types/type';

const experiencias: Experience[] = [
  {
    id: 1,
    position: 'Desarrollador Backend Jr.',
    company: 'Empresa Tech S.A.',
    description: 'Desarrollo y mantenimiento de microservicios con Java y Spring Boot.',
    startDate: '2023-03',
    endDate: '2024-10',
    location: 'CDMX, México',
    technologies: ['Java', 'Spring Boot', 'REST', 'Git'],
  },
  {
    id: 2,
    position: 'Practicante en Desarrollo de Software',
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
  return (
    <SectionWrapper id="experiencia">
      <div className="w-full opacity-0 animate-fade-in-start">
        <h2 className="text-3xl font-bold mb-12 text-center">Experiencia</h2>

        <ul className="space-y-12 flex flex-col items-center">
          {experiencias.map((exp) => (
            <li
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