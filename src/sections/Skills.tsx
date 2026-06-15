import { useState, useContext } from 'react'
import { ThemeContext } from '../App'

const categories = [
  {id:'languages',label:'Languages',icon:'</>',skills:['Python','JavaScript','TypeScript','Java','Kotlin','PHP','C','C++','R','SQL']},
  {id:'frontend',label:'Frontend',icon:'▣',skills:['React','Next.js','HTML5','CSS3','Tailwind CSS']},
  {id:'backend',label:'Backend',icon:'⚙',skills:['Node.js','Express.js','Spring Boot','PHP','Java Servlets']},
  {id:'mobile',label:'Mobile',icon:'📱',skills:['Android','Kotlin','Java']},
  {id:'databases',label:'Databases',icon:'🗄',skills:['MySQL','MongoDB','Oracle']},
  {id:'devops',label:'DevOps & Cloud',icon:'☁',skills:['Docker','Kubernetes']},
  {id:'tools',label:'Tools',icon:'🔧',skills:['Git','GitHub','VS Code','Postman','Playwright']},
  {id:'concepts',label:'Concepts',icon:'💡',skills:['OOP','REST APIs','MVC','Microservices','CI/CD','Cloud Computing','ETL','Business Intelligence']},
]

const iconMap: Record<string,string> = {
  Python:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  JavaScript:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Java:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  Kotlin:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  PHP:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'C':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'C++':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  R:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
  React:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  HTML5:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS3:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind CSS':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Node.js':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Spring Boot':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Java Servlets':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  Android:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
  MySQL:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MongoDB:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Oracle:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  Docker:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Kubernetes:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  Git:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'VS Code':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  Postman:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  Playwright:'https://playwright.dev/img/playwright-logo.svg',
}

const whiteBgIcons = ['GitHub','C','VS Code','Express.js','Playwright']

const fallbackType: Record<string,'database'> = { SQL:'database' }

const FallbackIcon = ({ type, color }: { type: 'bulb'|'database', color: string }) => {
  if (type === 'database') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    )
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.95.95 1.27 1.7 1.41 2.5"/>
    </svg>
  )
}

const Skills = () => {
  const { dark } = useContext(ThemeContext)
  const [active, setActive] = useState('languages')
  const current = categories.find(c => c.id === active)!

  const bg = dark ? 'linear-gradient(180deg,#0a0a18 0%,#080810 100%)' : 'linear-gradient(180deg,#ede9fe 0%,#f8f7ff 100%)'
  const heading = dark ? 'white' : '#1e1b4b'
  const muted = dark ? '#64748b' : '#7c6fa5'
  const accentText = dark ? '#a78bfa' : '#7c3aed'
  const badgeBg = dark ? 'rgba(139,92,246,0.1)' : 'rgba(124,58,237,0.08)'
  const badgeBorder = dark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)'
  const tabInactiveBg = dark ? 'rgba(139,92,246,0.05)' : 'rgba(124,58,237,0.04)'
  const tabInactiveBorder = dark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.15)'
  const tabInactiveText = dark ? '#94a3b8' : '#6b5b95'
  const panelBg = dark ? 'rgba(14,14,28,0.6)' : 'rgba(255,255,255,0.6)'
  const panelBorder = dark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.15)'
  const chipBg = dark ? 'rgba(8,8,20,0.8)' : 'rgba(255,255,255,0.8)'
  const chipBorder = dark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.15)'
  const chipText = dark ? '#e2e8f0' : '#1e1b4b'
  const fallbackBoxBg = dark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.1)'
  const fallbackColor = dark ? '#a78bfa' : '#7c3aed'

  return (
    <div style={{minHeight:'100vh',padding:'100px 6%',background:bg}}>
      <div style={{maxWidth:'1100px',margin:'0 auto'}}>

        <div style={{marginBottom:'60px'}}>
          <div style={{display:'inline-block',background:badgeBg,border:`1px solid ${badgeBorder}`,borderRadius:'50px',padding:'5px 16px',marginBottom:'16px'}}>
            <span style={{color:accentText,fontSize:'12px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase'}}>Skills</span>
          </div>
          <h2 style={{color:heading,fontSize:'42px',fontWeight:'900',letterSpacing:'-1px',marginBottom:'12px'}}>Tools I work with</h2>
          <p style={{color:muted,fontSize:'16px'}}>Always eager to learn — picking up new frameworks, tools and patterns is part of the fun.</p>
        </div>

        <div style={{display:'flex',gap:'32px',alignItems:'flex-start'}}>

          <div style={{display:'flex',flexDirection:'column',gap:'8px',flexShrink:0,width:'200px'}}>
            {categories.map(cat => (
              <button key={cat.id} onClick={()=>setActive(cat.id)}
                style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 16px',borderRadius:'10px',
                  background:active===cat.id?'linear-gradient(135deg,#8b5cf6,#6366f1)':tabInactiveBg,
                  border:active===cat.id?'none':`1px solid ${tabInactiveBorder}`,
                  color:active===cat.id?'white':tabInactiveText,
                  fontWeight:active===cat.id?700:500,fontSize:'14px',cursor:'pointer',textAlign:'left',
                  transition:'all 0.2s',
                  boxShadow:active===cat.id?'0 8px 24px rgba(139,92,246,0.3)':'none'}}>
                <span style={{fontSize:'16px'}}>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{flex:1,background:panelBg,border:`1px solid ${panelBorder}`,borderRadius:'20px',padding:'32px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'28px'}}>
              <div style={{width:'36px',height:'36px',borderRadius:'8px',background:dark?'rgba(139,92,246,0.2)':'rgba(124,58,237,0.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px'}}>{current.icon}</div>
              <h3 style={{color:heading,fontSize:'20px',fontWeight:'800'}}>{current.label}</h3>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'16px'}}>
              {current.skills.map(skill => {
                const iconUrl = iconMap[skill]
                return (
                  <div key={skill} className="skill-chip" style={{background:chipBg,border:`1px solid ${chipBorder}`,borderRadius:'14px',padding:'20px 24px',display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',minWidth:'100px'}}>
                    {iconUrl ? (
                      <div style={{
                        width:'32px',height:'32px',borderRadius:'8px',
                        background: whiteBgIcons.includes(skill) ? '#ffffff' : 'transparent',
                        display:'flex',alignItems:'center',justifyContent:'center'
                      }}>
                        <img src={iconUrl} alt={skill} style={{width:'26px',height:'26px',objectFit:'contain'}}/>
                      </div>
                    ) : (
                      <div style={{width:'32px',height:'32px',borderRadius:'8px',background:fallbackBoxBg,display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <FallbackIcon type={fallbackType[skill] || 'bulb'} color={fallbackColor}/>
                      </div>
                    )}
                    <span style={{color:chipText,fontSize:'13px',fontWeight:'600',textAlign:'center'}}>{skill}</span>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .skill-chip {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .skill-chip:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 12px 30px rgba(139,92,246,0.25);
          border-color: #8b5cf6 !important;
        }
      `}</style>
    </div>
  )
}

export default Skills
