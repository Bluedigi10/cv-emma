import { useState } from 'react'

import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Experience from './pages/experience'
import Certificates from './pages/certificates'

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  return (
    <>
      <div className="min-w-screen flex flex-col">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow">
        {activeSection === 'home' && <Home />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'certificates' && <Certificates />}
      </main>
      
      <Footer />
    </div>
    </>
  )
}

export default App
