import type { Certificate } from "../types/type"
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

interface CertificateProps {
  certificate: Certificate;
}

export default function Certificate({ certificate }: CertificateProps) {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: false,
        });
      }, []);
  return (
    <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-md">
      <img 
        src={certificate.imageUrl} 
        alt={certificate.name} 
        className="w-20 h-20 mx-auto mb-4" 
      />
      <h3 className="text-xl font-bold text-gray-800">{certificate.name}</h3>
      <p className="text-gray-600">{certificate.emitter}</p>
      <p className="text-sm text-gray-500">{certificate.date}</p>
    </div>
  );
}