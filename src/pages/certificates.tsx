import type { Certificate } from '../types/type';
import SectionWrapper from '../components/sectionWrapper';
import Certificado from '../components/certificate';

const certificados: Certificate[] = [
  {
    id: 1,
    name: 'Certificado en Java Backend',
    emitter: 'Oracle + Alura',
    date: '2024-06-10',
    imageUrl: 'https://ejemplo.com/certificado1'
  },
  {
    id: 2,
    name: 'Spring Boot Profesional',
    emitter: 'Udemy',
    date: '2023-12-15',
    imageUrl: 'https://ejemplo.com/certificado2'
  }
];

export default function Certificates() {
  return (
    <SectionWrapper id="certificados">
      <div className="w-full opacity-0 animate-fade-in-start">
        <h2 className="text-3xl font-bold mb-8 text-center">Certificados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificados.map(cert => (
            <Certificado key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}



/* import { useEffect, useState } from "react";
import Certificado from "../components/certificate";
import type { Certificate as CertificateType } from "../types/type";

export default function Certificates() {
  const [certificates, setCertificates] = useState<CertificateType[]>([]);

  useEffect(() => {
    fetch("https://tu-api.com/certificados")
      .then((res) => res.json())
      .then((data: CertificateType[]) => setCertificates(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Mis Certificados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map(cert => (
          <Certificado key={cert.id} certificate={cert} />
        ))}
      </div>
    </section>
  );
} */