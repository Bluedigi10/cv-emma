export interface Certificate {
  id: number;
  name: string;
  emitter: string;
  date: string;
  imageUrl: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  description: string;
  startDate: string;  // formato: yyyy-mm
  endDate?: string;    // opcional si es actual
  location: string;
  technologies: string[]; // por ejemplo: ['Java', 'Spring Boot']
}
