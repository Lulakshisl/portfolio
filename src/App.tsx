import { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import LoadingScreen from './components/LoadingScreen'

export const ThemeContext = createContext({ dark: true, toggle: () => {} })

const SectionDivider = ({ dark }: { dark: boolean }) => (
  <div style={{
    position: 'relative', width: '100%', height: '1px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <div style={{
      position: 'absolute', left: 0, right: 0, height: '1px',
      background: dark
        ? 'linear-gradient(to right, transparent, rgba(139,92,246,0.4) 20%, rgba(139,92,246,0.4) 80%, transparent)'
        : 'linear-gradient(to right, transparent, rgba(124,58,237,0.3) 20%, rgba(124,58,237,0.3) 80%, transparent)',
    }}/>
    <div style={{
      position: 'relative', zIndex: 1,
      width: '8px', height: '8px', borderRadius: '50%',
      background: dark ? '#8b5cf6' : '#7c3aed',
      boxShadow: dark ? '0 0 10px 3px rgba(139,92,246,0.6)' : '0 0 10px 3px rgba(124,58,237,0.4)',
    }}/>
  </div>
)

function App() {
  const [dark,   setDark]   = useState(true)
  const [loaded, setLoaded] = useState(false)
  const bg     = dark ? '#07070f' : '#f8f7ff'
  const toggle = () => setDark(d => !d)

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)}/>}
      <div style={{
        backgroundColor: bg, minHeight: '100vh',
        color: dark ? 'white' : '#1e1b4b',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.5s ease, background-color 0.3s',
      }}>
        <Navbar />
        <div id="home"><Home /></div>
        <SectionDivider dark={dark} />
        <div id="about"><About /></div>
        <SectionDivider dark={dark} />
        <div id="skills"><Skills /></div>
        <SectionDivider dark={dark} />
        <div id="projects"><Projects /></div>
        <SectionDivider dark={dark} />
        <div id="achievements"><Achievements /></div>
        <SectionDivider dark={dark} />
        <div id="contact"><Contact /></div>
        <SectionDivider dark={dark} />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ThemeContext.Provider>
  )
}

export default App