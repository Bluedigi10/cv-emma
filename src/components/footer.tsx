export default function Footer(){
    const currentYear = new Date().getFullYear();


    return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Sección superior: Redes sociales y contacto */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Redes sociales */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://linkedin.com/in/tuperfil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <i className="fab fa-linkedin text-2xl"></i> {/* Usar Font Awesome o íconos SVG */}
            </a>
            <a 
              href="https://github.com/tuperfil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a 
              href="mailto:tuemail@example.com" 
              className="hover:text-red-400 transition-colors"
            >
              <span className="sr-only">Email</span>
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>

          {/* Información de contacto */}
          <div className="text-center md:text-right">
            <p className="font-medium">Contacto</p>
            <p className="text-gray-300">edmvp98@gmail.com</p>
            <p className="text-gray-300">+52 (938) 182-4603</p>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="border-gray-700 my-4" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>
            &copy; {currentYear} Emmanuel Martinez. Todos los derechos reservados.
          </p>
          <p className="text-sm mt-1">
            Desarrollado con React, TypeScript y Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}