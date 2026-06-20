import { useState, useContext } from 'react'
import { ThemeContext } from '../App'

const achievements = [
  {
    title: 'Data Analytics with AI',
    org: 'Sololearn', year: '2026',
    tags: ['Data Analytics','Basics'],
    id: 'CC-SGABJZOA', type: 'Certification', icon: '🌐',
  },
  {
    title: 'SQL Intermediate',
    org: 'Sololearn', year: '2026',
    tags: ['SQL','Intermediate'],
    id: 'CC-IWSFMX7P', type: 'Certification', icon: '🌐',
  },
  {
    title: 'Introduction to Programming Using JavaScript',
    org: 'Sololearn', year: '2026',
    tags: ['JavaScript','Basics'],
    id: 'CC-9HQFF8FL', type: 'Certification', icon: '🌐',
  },
  {
    title: 'Introduction to Programming SQL',
    org: 'Sololearn', year: '2026',
    tags: ['SQL','Basics'],
    id: 'CC-YWAEU9LZ', type: 'Certification', icon: '🌐',
  },
  {
    title: 'Introduction to Programming Using CSS',
    org: 'Sololearn', year: '2026',
    tags: ['CSS','Basics'],
    id: 'CC-A8PZNKIY', type: 'Certification', icon: '🌐',
    
  },
  {
    title: 'Introduction to Programming Using HTML',
    org: 'Sololearn', year: '2025',
    tags: ['HTML','Basics'],
    id: 'CC-AD90KRTR', type: 'Certification', icon: '🌐',
  },
]

const Achievements = () => {
  const { dark } = useContext(ThemeContext)
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Certification']

  const filtered = filter === 'All'
    ? achievements
    : achievements.filter(a => a.type === filter)

  const bg          = dark ? 'linear-gradient(180deg,#080810 0%,#0a0a18 100%)' : 'linear-gradient(180deg,#f8f7ff 0%,#ede9fe 100%)'
  const heading     = dark ? 'white'                   : '#1e1b4b'
  const muted       = dark ? '#64748b'                 : '#7c6fa5'
  const accentText  = dark ? '#a78bfa'                 : '#7c3aed'
  const badgeBg     = dark ? 'rgba(139,92,246,0.1)'    : 'rgba(124,58,237,0.08)'
  const badgeBorder = dark ? 'rgba(139,92,246,0.3)'    : 'rgba(124,58,237,0.25)'
  const cardBg      = dark ? 'rgba(14,14,28,0.85)'     : 'rgba(255,255,255,0.9)'
  const cardBorder  = dark ? 'rgba(139,92,246,0.18)'   : 'rgba(124,58,237,0.15)'
  const tagBg       = dark ? 'rgba(139,92,246,0.1)'    : 'rgba(124,58,237,0.08)'
  const tagBorder   = dark ? 'rgba(139,92,246,0.25)'   : 'rgba(124,58,237,0.2)'
  const idColor     = dark ? '#475569'                 : '#9ca3af'
  const orb1        = dark ? 'rgba(139,92,246,0.06)'   : 'rgba(124,58,237,0.05)'

  return (
    <div style={{ minHeight:'100vh', padding:'100px 6%', background:bg, position:'relative', overflow:'hidden' }}>

      <div style={{ position:'absolute', top:'10%', right:'5%', width:'350px', height:'350px', borderRadius:'50%', background:orb1, filter:'blur(80px)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative' }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'56px' }}>
          <div style={{ display:'inline-block', background:badgeBg, border:`1px solid ${badgeBorder}`, borderRadius:'50px', padding:'5px 16px', marginBottom:'16px' }}>
            <span style={{ color:accentText, fontSize:'12px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase' }}>Achievements</span>
          </div>
          <h2 style={{ color:heading, fontSize:'clamp(28px,4vw,46px)', fontWeight:'900', letterSpacing:'-1.5px', margin:'0 0 12px 0' }}>
            Certifications I've{' '}
            <span style={{ background:'linear-gradient(135deg,#8b5cf6,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              earned
            </span>
          </h2>
          <p style={{ color:muted, fontSize:'15px', maxWidth:'480px', margin:'0 auto 32px' }}>
            Recognitions and certifications from my learning journey.
          </p>

          {/* Filter pills */}
          <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
            {filters.map(f => (
              <div
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding:'8px 22px', borderRadius:'50px', cursor:'pointer',
                  background: filter===f ? 'linear-gradient(135deg,#8b5cf6,#6366f1)' : badgeBg,
                  border: filter===f ? 'none' : `1px solid ${badgeBorder}`,
                  color: filter===f ? 'white' : accentText,
                  fontSize:'13px', fontWeight:'600',
                  transition:'all 0.2s',
                  userSelect:'none' as const,
                }}
              >
                {f === 'Certification' ? '🎓 ' : '✦'}{f}
              </div>
            ))}
          </div>
        </div>

        {/* Count */}
        <div style={{ textAlign:'center', marginBottom:'32px' }}>
          <span style={{ color:muted, fontSize:'13px', background:badgeBg, border:`1px solid ${badgeBorder}`, borderRadius:'50px', padding:'5px 16px' }}>
            ✦ {filtered.length} certifications found
          </span>
        </div>

        {/* Cards grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'24px' }}>
          {filtered.map((a, i) => (
            <div
              key={i}
              className="achievement-card"
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius:'20px',
                padding:'26px',
                transition:'all 0.3s ease',
                position:'relative',
                overflow:'hidden',
              }}
            >
              {/* Type badge */}
              <div style={{
                position:'absolute', top:'16px', right:'16px',
                background: badgeBg, border:`1px solid ${badgeBorder}`,
                borderRadius:'50px', padding:'3px 10px',
                color:accentText, fontSize:'10px', fontWeight:'700',
                display:'flex', alignItems:'center', gap:'4px',
              }}>
                🎓 {a.type}
              </div>

              {/* Icon circle */}
              <div style={{
                width:'52px', height:'52px', borderRadius:'14px',
                background:'linear-gradient(135deg,rgba(139,92,246,0.2),rgba(99,102,241,0.15))',
                border:`1px solid rgba(139,92,246,0.25)`,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'24px', marginBottom:'18px',
              }}>
                {a.icon}
              </div>

              {/* Title */}
              <h3 style={{ color:heading, fontSize:'15px', fontWeight:'800', margin:'0 0 6px 0', lineHeight:1.4, paddingRight:'80px' }}>
                {a.title}
              </h3>

              {/* Org + year row */}
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'14px' }}>
                <span style={{ color:muted, fontSize:'13px' }}>{a.org}</span>
                <span style={{
                  background:'rgba(139,92,246,0.12)', border:`1px solid rgba(139,92,246,0.25)`,
                  color:accentText, fontSize:'11px', fontWeight:'700',
                  padding:'2px 10px', borderRadius:'50px',
                }}>{a.year}</span>
              </div>

              {/* Tags */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'16px' }}>
                {a.tags.map(tag => (
                  <span key={tag} style={{
                    background:tagBg, border:`1px solid ${tagBorder}`,
                    color:accentText, fontSize:'11px', fontWeight:'600',
                    padding:'3px 10px', borderRadius:'50px',
                    display:'flex', alignItems:'center', gap:'4px',
                  }}>
                    {'<  >'} {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height:'1px', background:`rgba(139,92,246,0.15)`, marginBottom:'12px' }}/>

              {/* ID */}
              <p style={{ color:idColor, fontSize:'11px', margin:0, fontFamily:'monospace' }}>
                ID: {a.id}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .achievement-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(139,92,246,0.2);
          border-color: rgba(139,92,246,0.4) !important;
        }
      `}</style>
    </div>
  )
}

export default Achievements