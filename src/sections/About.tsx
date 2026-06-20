import { useContext } from 'react'
import { ThemeContext } from '../App'

const journeyItems = [
  {
    period: '2023 – Present',
    title: 'BSc Honors in Information Technology',
    place: 'Sri Lanka Institute of Information Technology (SLIIT)',
    detail: '',
    icon: '🎓',
    color: '#8b5cf6',
  },
  {
    period: '2024 – 2025',
    title: 'Diploma in Human Resource Management',
    place: 'LPEC Campus',
    detail: '',
    icon: '📜',
    color: '#10b981',
  },
  {
    period: '2019 – 2021',
    title: 'G.C.E. A/L',
    place: '',
    detail: 'ART STREAM – 2B, C',
    icon: '📚',
    color: '#f59e0b',
  },
  {
    period: '2018',
    title: 'G.C.E. O/L',
    place: '',
    detail: '',
    icon: '📖',
    color: '#0b78f5',
  },
]

const About = () => {
  const { dark } = useContext(ThemeContext)
  const stats = [['6+','Projects'],['5+','Technologies'],['2+','Years Learning']]
  const info  = [
    ['Name',   'Lulakshi Madubashini'],
    ['Country','Sri Lanka'],
    ['Email',  'lulakshimadubashini@gmail.com'],
    ['Status', 'Open to Opportunities'],
  ]

  const bg          = dark ? 'linear-gradient(180deg,#080810 0%,#0a0a18 100%)' : 'linear-gradient(180deg,#f8f7ff 0%,#ede9fe 100%)'
  const heading     = dark ? 'white'                   : '#1e1b4b'
  const muted       = dark ? '#64748b'                 : '#7c6fa5'
  const accentText  = dark ? '#a78bfa'                 : '#7c3aed'
  const badgeBg     = dark ? 'rgba(139,92,246,0.1)'    : 'rgba(124,58,237,0.08)'
  const badgeBorder = dark ? 'rgba(139,92,246,0.3)'    : 'rgba(124,58,237,0.25)'
  const cardBg      = dark ? 'rgba(139,92,246,0.07)'   : 'rgba(124,58,237,0.06)'
  const cardBorder  = dark ? 'rgba(139,92,246,0.2)'    : 'rgba(124,58,237,0.18)'
  const infoBg      = dark ? 'rgba(15,15,30,0.8)'      : 'rgba(255,255,255,0.7)'
  const infoBorder  = dark ? 'rgba(139,92,246,0.15)'   : 'rgba(124,58,237,0.15)'
  const infoText    = dark ? '#e2e8f0'                 : '#1e1b4b'
  const imgBorder   = dark ? 'rgba(139,92,246,0.3)'    : 'rgba(124,58,237,0.25)'
  const jCardBg     = dark ? 'rgba(14,14,28,0.8)'      : 'rgba(255,255,255,0.85)'
  const jCardBorder = dark ? 'rgba(139,92,246,0.2)'    : 'rgba(124,58,237,0.18)'
  const lineColor   = dark ? 'rgba(139,92,246,0.4)'    : 'rgba(124,58,237,0.3)'

  return (
    <div style={{ background:bg }}>

      {/* ── About section ── */}
      <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'100px 6% 60px' }}>
        <div style={{ display:'flex', gap:'80px', alignItems:'center', maxWidth:'1100px', width:'100%' }}>

          <div style={{ flexShrink:0, position:'relative' }}>
            <div style={{ width:'340px', height:'400px', borderRadius:'24px', overflow:'hidden', border:`2px solid ${imgBorder}`, boxShadow: dark ? '0 30px 80px rgba(139,92,246,0.15)' : '0 30px 80px rgba(139,92,246,0.12)', position:'relative' }}>
              <img src="/lushi.png" alt="About" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              <div style={{ position:'absolute', inset:0, background: dark ? 'linear-gradient(to top,rgba(8,8,16,0.6),transparent)' : 'linear-gradient(to top,rgba(124,58,237,0.15),transparent)' }}/>
            </div>
          </div>

          <div style={{ flex:1 }}>
            <div style={{ display:'inline-block', background:badgeBg, border:`1px solid ${badgeBorder}`, borderRadius:'50px', padding:'5px 16px', marginBottom:'16px' }}>
              <span style={{ color:accentText, fontSize:'12px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase' }}>About Me</span>
            </div>
            <h2 style={{ color:heading, fontSize:'42px', fontWeight:'900', marginBottom:'20px', letterSpacing:'-1px', lineHeight:'1.1' }}>
              Turning ideas into<br/>
              <span style={{ background:'linear-gradient(135deg,#8b5cf6,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>digital reality</span>
            </h2>
            <p style={{ color:muted, fontSize:'16px', lineHeight:'1.9', marginBottom:'36px' }}>
              Hello! I'm <strong style={{ color:accentText }}>Lulakshi Madubashini</strong>, a passionate Software Engineering student who loves building modern websites, mobile applications, and innovative digital solutions. My goal is to transform ideas into functional and visually appealing software products.
            </p>

            <div style={{ display:'flex', gap:'20px', marginBottom:'36px' }}>
              {stats.map(([num, label]) => (
                <div key={label} style={{ flex:1, background:cardBg, border:`1px solid ${cardBorder}`, borderRadius:'16px', padding:'20px', textAlign:'center' }}>
                  <div style={{ color:'#8b5cf6', fontSize:'30px', fontWeight:'900', lineHeight:1 }}>{num}</div>
                  <div style={{ color:muted, fontSize:'13px', marginTop:'6px', fontWeight:'500' }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'36px' }}>
              {info.map(([label, value]) => (
                <div key={label} style={{ background:infoBg, border:`1px solid ${infoBorder}`, borderRadius:'12px', padding:'14px 18px' }}>
                  <div style={{ color:'#8b5cf6', fontSize:'10px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'4px' }}>{label}</div>
                  <div style={{ color:infoText, fontSize:'13px', fontWeight:'500' }}>{value}</div>
                </div>
              ))}
            </div>

            <div
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior:'smooth' })
              }}
              style={{ background:'linear-gradient(135deg,#8b5cf6,#6366f1)', color:'white', padding:'14px 32px', borderRadius:'10px', fontWeight:'700', fontSize:'14px', display:'inline-block', boxShadow:'0 8px 24px rgba(139,92,246,0.3)', cursor:'pointer' }}
            >
              Get In Touch →
            </div>
          </div>
        </div>
      </div>

      {/* ── Journey timeline ── */}
      <div style={{ padding:'60px 6% 100px', maxWidth:'1100px', margin:'0 auto' }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'64px' }}>
          <div style={{ display:'inline-block', background:badgeBg, border:`1px solid ${badgeBorder}`, borderRadius:'50px', padding:'5px 16px', marginBottom:'16px' }}>
            <span style={{ color:accentText, fontSize:'12px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase' }}>Journey</span>
          </div>
          <h2 style={{ color:heading, fontSize:'clamp(28px,4vw,42px)', fontWeight:'900', letterSpacing:'-1px', margin:'0 0 12px 0' }}>
            My path through{' '}
            <span style={{ background:'linear-gradient(135deg,#8b5cf6,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              time
            </span>
          </h2>
          <p style={{ color:muted, fontSize:'15px' }}>Milestones along the way.</p>
        </div>

        {/* Timeline */}
        <div style={{ position:'relative', display:'flex', flexDirection:'column', alignItems:'center' }}>

          {/* Vertical center line */}
          <div style={{
            position:'absolute', top:0, bottom:0,
            left:'50%', transform:'translateX(-50%)',
            width:'2px',
            background: `linear-gradient(to bottom, transparent, ${lineColor} 10%, ${lineColor} 90%, transparent)`,
          }}/>

          {journeyItems.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={i} style={{
                display:'flex', width:'100%',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                marginBottom: i < journeyItems.length - 1 ? '48px' : '0',
                position:'relative',
              }}>

                {/* Dot on center line */}
                <div style={{
                  position:'absolute', left:'50%', top:'28px',
                  transform:'translateX(-50%)',
                  width:'14px', height:'14px', borderRadius:'50%',
                  background: item.color,
                  boxShadow: `0 0 12px ${item.color}80`,
                  zIndex:2, border: `3px solid ${dark ? '#080810' : '#f8f7ff'}`,
                }}/>

                {/* Card */}
                <div style={{
                  width:'44%',
                  background: jCardBg,
                  border: `1px solid ${jCardBorder}`,
                  borderRadius:'16px',
                  padding:'22px 26px',
                  backdropFilter:'blur(10px)',
                  boxShadow: dark ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(124,58,237,0.08)',
                  position:'relative',
                  transition:'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="journey-card"
                >
                  {/* Period + icon */}
                  <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'10px' }}>
                    <span style={{ fontSize:'16px' }}>{item.icon}</span>
                    <span style={{ color: item.color, fontSize:'13px', fontWeight:'700' }}>{item.period}</span>
                  </div>

                  {/* Title */}
                  <h3 style={{ color:heading, fontSize:'16px', fontWeight:'800', margin:'0 0 6px 0', lineHeight:1.3 }}>
                    {item.title}
                  </h3>

                  {/* Place */}
                  <p style={{ color:muted, fontSize:'13px', margin:'0 0 8px 0' }}>{item.place}</p>

                  {/* Detail */}
                  {item.detail && (
                    <>
                      <div style={{ height:'1px', background: lineColor, marginBottom:'8px' }}/>
                      <p style={{ color:muted, fontSize:'12px', margin:0, fontStyle:'italic' }}>{item.detail}</p>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .journey-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(139,92,246,0.2) !important;
          border-color: rgba(139,92,246,0.4) !important;
        }
      `}</style>
    </div>
  )
}

export default About