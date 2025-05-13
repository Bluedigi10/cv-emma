import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id?: string;
  bgColor?: string;
  textColor?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  bgColor = 'bg-white',
  textColor = 'text-gray-800',
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 ${bgColor} ${textColor}`}>
      <div className="container mx-auto px-4 max-w-5xl w-full">
        {children}
      </div>
    </section>
  );
}
