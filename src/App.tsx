import { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export const ThemeContext = createContext({ dark: true, toggle: () => {} })

function App() {
  const [dark, setDark] = useState(true)
  const bg = dark ? '#07070f' : '#f8f7ff'
  const toggle = () => setDark(d => !d)

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div style={{ backgroundColor: bg, minHeight: '100vh', color: dark ? 'white' : '#1e1b4b', transition: 'all 0.3s' }}>
        <Navbar />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
