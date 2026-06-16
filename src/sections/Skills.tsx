import { useState, useContext } from 'react'
import { ThemeContext } from '../App'

const categories = [
  {
    id: 'languages', label: 'Languages',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: ['Python','JavaScript','TypeScript','Java','Kotlin','PHP','C','C++','R','SQL']
  },
  {
    id: 'frontend', label: 'Frontend',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    skills: ['React','Next.js','HTML5','CSS3','Tailwind CSS']
  },
  {
    id: 'backend', label: 'Backend',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    skills: ['Node.js','Express.js','Spring Boot','PHP','Java Servlets']
  },
  {
    id: 'mobile', label: 'Mobile',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    skills: ['Android','Kotlin','Java']
  },
  {
    id: 'databases', label: 'Databases',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: ['MySQL','MongoDB','Oracle']
  },
  {
    id: 'devops', label: 'DevOps & Cloud',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    skills: ['Docker','Kubernetes']
  },
  {
    id: 'tools', label: 'Tools',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: ['Git','GitHub','VS Code','Postman','Playwright']
  },
  {
    id: 'concepts', label: 'Concepts',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6"/><path d="M10 22h4"/>
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.87 4.87 0 0 1 8.91 14"/>
      </svg>
    ),
    skills: ['OOP','REST APIs','MVC','Microservices','CI/CD','Cloud Computing','ETL','Business Intelligence']
  },
]

const iconMap: Record<string, string> = {
  Python:            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  JavaScript:        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript:        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Java:              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  Kotlin:            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  PHP:               'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'C':               'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'C++':             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  R:                 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
  SQL:               'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  React:             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
  HTML5:             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS3:              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind CSS':    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Node.js':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Spring Boot':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Java Servlets':   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  Android:           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
  MySQL:             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MongoDB:           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Oracle:            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  Docker:            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Kubernetes:        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  Git:               'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub:            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'VS Code':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  Postman:           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  Playwright:        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg',
}

const whiteBgIcons = ['GitHub', 'Express.js', 'Next.js']

const conceptEmoji: Record<string, string> = {
  'OOP': '🧩', 'REST APIs': '🔗', 'MVC': '🏗️',
  'Microservices': '⚡', 'CI/CD': '🔄',
  'Cloud Computing': '☁️', 'ETL': '📊', 'Business Intelligence': '📈',
}

const TickerRow = ({ skills, reverse = false, dark }: { skills: string[], reverse?: boolean, dark: boolean }) => {
  const chipBg     = dark ? 'rgba(15,12,35,0.85)' : 'rgba(255,255,255,0.92)'
  const chipBorder = dark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.18)'
  const chipText   = dark ? '#e2e8f0' : '#1e1b4b'
  const fadeL      = dark ? 'linear-gradient(to right,#0a0a18,transparent)' : 'linear-gradient(to right,#ede9fe,transparent)'
  const fadeR      = dark ? 'linear-gradient(to left,#080810,transparent)'  : 'linear-gradient(to left,#f8f7ff,transparent)'
  const doubled    = [...skills, ...skills]

  return (
    <div style={{ overflow:'hidden', width:'100%', position:'relative' }}>
      <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'80px', background:fadeL, zIndex:2, pointerEvents:'none' }}/>
      <div style={{ position:'absolute', right:0, top:0, bottom:0, width:'80px', background:fadeR, zIndex:2, pointerEvents:'none' }}/>
      <div
        className={reverse ? 'ticker-reverse' : 'ticker-forward'}
        style={{ display:'flex', gap:'16px', width:'max-content', padding:'8px 0' }}
      >
        {doubled.map((skill, i) => {
          const iconUrl = iconMap[skill]
          const emoji   = conceptEmoji[skill]
          return (
            <div
              key={`${skill}-${i}`}
              className="skill-chip"
              style={{
                background: chipBg,
                border: `1px solid ${chipBorder}`,
                borderRadius: '18px',
                padding: '20px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
                minWidth: '120px',
                flexShrink: 0,
              }}
            >
              {iconUrl ? (
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: whiteBgIcons.includes(skill) ? '#ffffff' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: whiteBgIcons.includes(skill) ? '6px' : '0',
                }}>
                  <img src={iconUrl} alt={skill} style={{ width:'44px', height:'44px', objectFit:'contain' }}/>
                </div>
              ) : emoji ? (
                <div style={{ fontSize:'40px', lineHeight:1 }}>{emoji}</div>
              ) : (
                <div style={{
                  width:'52px', height:'52px', borderRadius:'12px',
                  background: dark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.1)',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px',
                }}>💡</div>
              )}
              <span style={{ color:chipText, fontSize:'13px', fontWeight:'700', textAlign:'center', lineHeight:1.3, whiteSpace:'nowrap' }}>
                {skill}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Skills = () => {
  const { dark } = useContext(ThemeContext)
  const [active, setActive]   = useState('languages')
  const [animKey, setAnimKey] = useState(0)
  const current = categories.find(c => c.id === active)!

  const handleTabClick = (id: string) => {
    setActive(id)
    setAnimKey(k => k + 1)
  }

  const half = Math.ceil(current.skills.length / 2)
  const row1 = current.skills.slice(0, half)
  const row2 = [...current.skills.slice(half)]
  while (row2.length < 3) row2.push(row1[row2.length % row1.length])

  const bg              = dark ? 'linear-gradient(180deg,#0a0a18 0%,#080810 100%)' : 'linear-gradient(180deg,#ede9fe 0%,#f8f7ff 100%)'
  const heading         = dark ? 'white'                      : '#1e1b4b'
  const muted           = dark ? '#64748b'                    : '#7c6fa5'
  const accentText      = dark ? '#a78bfa'                    : '#7c3aed'
  const badgeBg         = dark ? 'rgba(139,92,246,0.1)'       : 'rgba(124,58,237,0.08)'
  const badgeBorder     = dark ? 'rgba(139,92,246,0.3)'       : 'rgba(124,58,237,0.25)'
  const tabInactiveBg   = dark ? 'rgba(139,92,246,0.04)'      : 'rgba(124,58,237,0.03)'
  const tabInactiveBdr  = dark ? 'rgba(139,92,246,0.12)'      : 'rgba(124,58,237,0.12)'
  const tabInactiveText = dark ? '#94a3b8'                    : '#6b5b95'
  const panelBg         = dark ? 'rgba(14,14,28,0.7)'         : 'rgba(255,255,255,0.75)'
  const panelBorder     = dark ? 'rgba(139,92,246,0.18)'      : 'rgba(124,58,237,0.18)'
  const orb1            = dark ? 'rgba(139,92,246,0.06)'      : 'rgba(124,58,237,0.05)'
  const orb2            = dark ? 'rgba(99,102,241,0.05)'      : 'rgba(99,102,241,0.04)'
  const dividerColor    = dark ? 'rgba(139,92,246,0.25)'      : 'rgba(124,58,237,0.15)'
  const hintBg          = dark ? 'rgba(139,92,246,0.08)'      : 'rgba(124,58,237,0.06)'

  // stats for header
  const totalSkills = categories.reduce((a, c) => a + c.skills.length, 0)

  return (
    <div style={{ minHeight:'100vh', padding:'100px 6%', background:bg, position:'relative', overflow:'hidden' }}>

      {/* Background orbs */}
      <div style={{ position:'absolute', top:'10%',    right:'5%', width:'400px', height:'400px', borderRadius:'50%', background:orb1, filter:'blur(80px)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'15%', left:'3%',  width:'300px', height:'300px', borderRadius:'50%', background:orb2, filter:'blur(60px)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative' }}>

        {/* ── NEW HEADER ── */}
        <div style={{ marginBottom:'60px' }}>

          {/* Top badge with pulsing dot */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            background:badgeBg, border:`1px solid ${badgeBorder}`,
            borderRadius:'50px', padding:'6px 16px', marginBottom:'22px',
          }}>
            <span style={{
              width:'7px', height:'7px', borderRadius:'50%', background:'#8b5cf6',
              display:'inline-block', animation:'pulse-dot 2s ease-in-out infinite',
            }}/>
            <span style={{ color:accentText, fontSize:'11px', fontWeight:'700', letterSpacing:'2.5px', textTransform:'uppercase' }}>
              Skills & Technologies
            </span>
          </div>

          {/* Main heading */}
          <h2 style={{
            color:heading, fontSize:'clamp(34px,5vw,52px)',
            fontWeight:'900', letterSpacing:'-2px',
            lineHeight:1.05, margin:'0 0 14px 0',
          }}>
            My Development{' '}
            <span style={{
              background:'linear-gradient(135deg,#8b5cf6,#a78bfa,#6366f1)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>
              Lab Equipment.
            </span>
          </h2>

          {/* Purple accent divider */}
          <div style={{
            width:'52px', height:'3px',
            background:'linear-gradient(90deg,#8b5cf6,#6366f1)',
            borderRadius:'99px', marginBottom:'22px',
          }}/>

          {/* Subtext + hint chip row */}
          <div style={{ display:'flex', alignItems:'flex-start', gap:'20px', flexWrap:'wrap', marginBottom:'28px' }}>
            <p style={{ color:muted, fontSize:'15.5px', margin:0, maxWidth:'440px', lineHeight:1.75 }}>
               Precision tools for building digital solutions.
            </p>
            {/* "Tap any skill" hint */}
            
          </div>

          {/* Stats row */}
          <div style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
            {[
              { value: `${totalSkills}+`, label: 'Technologies' },
              { value: `${categories.length}`,  label: 'Categories'   },
              { value: '3+',  label: 'Years Learning'  },
            ].map(stat => (
              <div key={stat.label} style={{
                display:'flex', alignItems:'center', gap:'10px',
                background:badgeBg, border:`1px solid ${dividerColor}`,
                borderRadius:'10px', padding:'8px 16px',
              }}>
                <span style={{ color:accentText, fontSize:'16px', fontWeight:'900' }}>{stat.value}</span>
                <span style={{ color:muted, fontSize:'12px', fontWeight:'500' }}>{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
        {/* ── END HEADER ── */}

        <div style={{ display:'flex', gap:'28px', alignItems:'flex-start' }}>

          {/* Sidebar tabs */}
          <div style={{ display:'flex', flexDirection:'column', gap:'6px', flexShrink:0, width:'195px' }}>
            {categories.map(cat => {
              const isActive = active === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabClick(cat.id)}
                  className={isActive ? '' : 'skill-tab-hover'}
                  style={{
                    display:'flex', alignItems:'center', gap:'10px',
                    padding:'11px 14px', borderRadius:'10px', cursor:'pointer',
                    background: isActive ? 'linear-gradient(135deg,#8b5cf6,#6366f1)' : tabInactiveBg,
                    border: isActive ? 'none' : `1px solid ${tabInactiveBdr}`,
                    color: isActive ? 'white' : tabInactiveText,
                    fontWeight: isActive ? 700 : 500,
                    fontSize:'13.5px', textAlign:'left',
                    transition:'all 0.22s cubic-bezier(.4,0,.2,1)',
                    boxShadow: isActive ? '0 6px 20px rgba(139,92,246,0.35)' : 'none',
                    transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                  }}
                >
                  <span style={{ fontSize:'15px' }}>{cat.icon}</span>
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div style={{
            flex:1, background:panelBg,
            border:`1px solid ${panelBorder}`,
            borderRadius:'20px', padding:'28px 0',
            backdropFilter:'blur(12px)',
            WebkitBackdropFilter:'blur(12px)',
            minHeight:'340px', overflow:'hidden',
          }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'24px', padding:'0 28px' }}>
              <div style={{
                width:'40px', height:'40px', borderRadius:'10px',
                background: dark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.12)',
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                {current.icon}
              </div>
              <div>
                <h3 style={{ color:heading, fontSize:'18px', fontWeight:'800', margin:0 }}>{current.label}</h3>
                <p style={{ color:muted, fontSize:'12px', margin:0 }}>{current.skills.length} technologies</p>
              </div>
            </div>

            <div key={animKey} style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              <TickerRow skills={row1} reverse={false} dark={dark} />
              {row2.length > 0 && <TickerRow skills={row2} reverse={true} dark={dark} />}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity:1; transform:scale(1);   }
          50%       { opacity:.4; transform:scale(1.5); }
        }
        @keyframes ticker-fwd {
          from { transform: translateX(0);   }
          to   { transform: translateX(-50%); }
        }
        @keyframes ticker-rev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0);    }
        }
        .ticker-forward { animation: ticker-fwd 18s linear infinite; }
        .ticker-reverse { animation: ticker-rev 18s linear infinite; }
        .ticker-forward:hover,
        .ticker-reverse:hover { animation-play-state: paused; }
        .skill-chip {
          transition: transform .25s cubic-bezier(.4,0,.2,1),
                      box-shadow .25s ease, border-color .25s ease;
        }
        .skill-chip:hover {
          transform: translateY(-6px) scale(1.06);
          box-shadow: 0 14px 32px rgba(139,92,246,0.25);
          border-color: #8b5cf6 !important;
        }
        .skill-tab-hover:hover {
          background: rgba(139,92,246,0.1) !important;
          color: #a78bfa !important;
          transform: translateX(3px);
        }
      `}</style>
    </div>
  )
}

export default Skills
