import type { Certificate } from "../types/type";

interface CertificateProps {
  certificate: Certificate;
}

export default function Certificate({ certificate }: CertificateProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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