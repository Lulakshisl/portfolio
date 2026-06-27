import { useState, useContext, useRef } from 'react'
import { ThemeContext } from '../App'

const projects = [
  {
    title: 'Coconut Plantation System',
    desc: 'Relaxed cafe workspace platform — book a table, browse the menu, place orders and manage bookings in one cohesive experience.',
    tags: ['React','Laravel','MongoDB'],
    type: 'Web', demo: '#', code: 'https://github.com/Lulakshisl',
    color: '#8b5cf6', src: '/coconut.png'
  },
  {
    title: 'Coffee Shop App',
    desc: 'Coffee ordering platform with menu browsing, inventory management and customer order tracking.',
    tags: ['MongoDB','Express','React','Node.js'],
    type: 'Web', demo: '#', code: 'https://github.com/Lulakshisl',
    color: '#6366f1', src: '/coffee.png'
  },
  {
    title: 'FinPay Wallet App',
    desc: 'Mobile wallet application with secure transactions, balance management and transfer history.',
    tags: ['Flutter','Dart','Firebase','Google Maps API'],
    type: 'Mobile', demo: '#', code: 'https://github.com/Lulakshisl',
    color: '#a78bfa', src: '/FinPay Wallet mobile_app.png'
  },
  {
    title: 'Portfolio Project',
    desc: 'A modern portfolio website built with React, Vite & TypeScript, featuring smooth animations, responsive design, and a dark mode toggle.',
    tags: ['React','TypeScript','Vite','Tailwind'],
    type: 'Enterprise', demo: '#', code: 'https://github.com/Lulakshisl',
    color: '#7c3aed', src: '/portfolio.png'
  },
  {
    title: 'RidePark App',
    desc: 'Smart parking application with slot booking, location tracking and user management features.',
    tags: ['Kotlin','Java'],
    type: 'Mobile', demo: '#', code: 'https://github.com/Lulakshisl',
    color: '#8b5cf6', src: '/mobailapp1.png'
  },
  {
    title: 'Medicare',
    desc: 'Healthcare web platform for managing patient records, appointments, and medical data with a clean and accessible interface.',
    tags: ['React','Vite','JavaScript','MongoDB'],
    type: 'Web', demo: '#', code: 'https://github.com/Lulakshisl',
    color: '#8b5cf6', src: '/medicare.png'
  },
]

const filters = ['All','Web','Mobile','Enterprise']

type Project = typeof projects[0]

const TiltCard = ({
  p, cardBg, cardBorder, heading, descText,
  accentText, tagBg, tagBorder, secBtnBg, secBtnBorder,
  onClick,
}: {
  p: Project, cardBg: string, cardBorder: string,
  heading: string, descText: string, accentText: string,
  tagBg: string, tagBorder: string, secBtnBg: string,
  secBtnBorder: string, onClick: () => void,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width  / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -10
    const rotateY = ((x - cx) / cx) *  10
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`
  }

  const handleMouseLeave = () => {
    if (ref.current)
      ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.15s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className="project-card"
    >
      <div style={{
        height: '170px',
        background: `linear-gradient(135deg,${p.color}25,${p.color}08)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderBottom: `1px solid ${cardBorder}`, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          background: `${p.color}25`, border: `1px solid ${p.color}50`,
          borderRadius: '8px', padding: '5px 12px', color: p.color,
          fontSize: '11px', fontWeight: '700', letterSpacing: '1px',
          position: 'absolute', top: '14px', left: '14px', zIndex: 2,
        }}>
          {p.type}
        </div>
        {p.src
          ? <img src={p.src} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
          : <span style={{ fontSize:'40px', opacity:0.2, color:heading }}>{'</>'}</span>
        }
        <div className="card-overlay" style={{
          position:'absolute', inset:0, display:'flex',
          alignItems:'center', justifyContent:'center',
          background:'rgba(0,0,0,0.45)', opacity:0,
          transition:'opacity 0.25s', fontSize:'13px',
          fontWeight:'700', color:'white', letterSpacing:'1px',
        }}>
          Click to expand ↗
        </div>
      </div>

      <div style={{ padding:'22px' }}>
        <h3 style={{ color:heading, fontSize:'15px', fontWeight:'800', marginBottom:'8px', lineHeight:1.3 }}>
          {p.title}
        </h3>
        <p style={{ color:descText, fontSize:'13px', lineHeight:1.7, marginBottom:'14px',
          display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden',
        }}>
          {p.desc}
        </p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'18px' }}>
          {p.tags.map(tag => (
            <span key={tag} style={{
              background:tagBg, border:`1px solid ${tagBorder}`,
              color:accentText, fontSize:'11px', fontWeight:'600',
              padding:'3px 10px', borderRadius:'50px',
            }}>{tag}</span>
          ))}
        </div>
        <div style={{ display:'flex', gap:'10px', borderTop:`1px solid ${cardBorder}`, paddingTop:'14px' }}>
          <a href={p.demo} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ flex:1, background:'linear-gradient(135deg,#8b5cf6,#6366f1)', color:'white',
              padding:'8px', borderRadius:'8px', textDecoration:'none',
              fontSize:'12px', fontWeight:'700', textAlign:'center' }}>
            Live Demo ↗
          </a>
          <a href={p.code} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ flex:1, background:secBtnBg, border:`1px solid ${secBtnBorder}`,
              color:accentText, padding:'8px', borderRadius:'8px', textDecoration:'none',
              fontSize:'12px', fontWeight:'700', textAlign:'center' }}>
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}

const Modal = ({
  p, dark, onClose,
  heading, muted, accentText, tagBg, tagBorder,
  secBtnBg, secBtnBorder, cardBorder,
}: {
  p: Project, dark: boolean, onClose: () => void,
  heading: string, muted: string, accentText: string,
  tagBg: string, tagBorder: string, secBtnBg: string,
  secBtnBorder: string, cardBorder: string,
}) => {
  const cardBg = dark ? 'rgba(14,14,28,0.98)' : '#ffffff'

  return (
    <div
      onClick={onClose}
      style={{
        position:'fixed', inset:0, zIndex:1000,
        background:'rgba(0,0,0,0.65)',
        backdropFilter:'blur(6px)',
        display:'flex', alignItems:'center', justifyContent:'center',
        padding:'24px', animation:'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: cardBg,
          border: `1px solid ${cardBorder}`,
          borderRadius: '24px',
          width: '100%', maxWidth: '620px',
          overflow: 'hidden',
          animation: 'slideUp 0.28s cubic-bezier(.4,0,.2,1)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position:'absolute', top:'16px', right:'16px', zIndex:10,
            width:'34px', height:'34px', borderRadius:'50%',
            background: dark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.1)',
            border: `1px solid ${cardBorder}`,
            color: accentText, fontSize:'18px', fontWeight:'700',
            cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
            transition:'all 0.2s',
          }}
          className="close-btn"
        >
          ✕
        </button>

        <div style={{
          height:'220px',
          background:`linear-gradient(135deg,${p.color}25,${p.color}08)`,
          position:'relative', overflow:'hidden',
        }}>
          <div style={{
            position:'absolute', top:'14px', left:'14px',
            background:`${p.color}25`, border:`1px solid ${p.color}50`,
            borderRadius:'8px', padding:'5px 12px',
            color:p.color, fontSize:'11px', fontWeight:'700', letterSpacing:'1px',
          }}>
            {p.type}
          </div>
          {p.src
            ? <img src={p.src} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            : <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100%' }}>
                <span style={{ fontSize:'52px', opacity:0.2, color:heading }}>{'</>'}</span>
              </div>
          }
        </div>

        <div style={{ padding:'28px' }}>
          <h2 style={{ color:heading, fontSize:'22px', fontWeight:'900', marginBottom:'10px', lineHeight:1.2 }}>
            {p.title}
          </h2>
          <p style={{ color:muted, fontSize:'14px', lineHeight:1.8, marginBottom:'20px' }}>
            {p.desc}
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'24px' }}>
            {p.tags.map(tag => (
              <span key={tag} style={{
                background:tagBg, border:`1px solid ${tagBorder}`,
                color:accentText, fontSize:'12px', fontWeight:'600',
                padding:'4px 12px', borderRadius:'50px',
              }}>{tag}</span>
            ))}
          </div>
          <div style={{ display:'flex', gap:'12px' }}>
            <a href={p.demo} target="_blank" rel="noreferrer" style={{
              flex:1, background:'linear-gradient(135deg,#8b5cf6,#6366f1)',
              color:'white', padding:'12px', borderRadius:'10px',
              textDecoration:'none', fontSize:'13px', fontWeight:'700', textAlign:'center',
            }}>
              Live Demo ↗
            </a>
            <a href={p.code} target="_blank" rel="noreferrer" style={{
              flex:1, background:secBtnBg, border:`1px solid ${secBtnBorder}`,
              color:accentText, padding:'12px', borderRadius:'10px',
              textDecoration:'none', fontSize:'13px', fontWeight:'700', textAlign:'center',
            }}>
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const { dark } = useContext(ThemeContext)
  const [filter, setFilter]     = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter)

  const bg                 = dark ? 'linear-gradient(180deg,#080810 0%,#0a0a18 100%)' : 'linear-gradient(180deg,#f8f7ff 0%,#ede9fe 100%)'
  const heading            = dark ? 'white'                   : '#1e1b4b'
  const muted              = dark ? '#64748b'                 : '#7c6fa5'
  const accentText         = dark ? '#a78bfa'                 : '#7c3aed'
  const badgeBg            = dark ? 'rgba(139,92,246,0.1)'    : 'rgba(124,58,237,0.08)'
  const badgeBorder        = dark ? 'rgba(139,92,246,0.3)'    : 'rgba(124,58,237,0.25)'
  const filterInactiveBg   = dark ? 'rgba(139,92,246,0.05)'   : 'rgba(124,58,237,0.04)'
  const filterInactiveBdr  = dark ? 'rgba(139,92,246,0.2)'    : 'rgba(124,58,237,0.18)'
  const filterInactiveText = dark ? '#94a3b8'                 : '#6b5b95'
  const cardBg             = dark ? 'rgba(14,14,28,0.85)'     : 'rgba(255,255,255,0.85)'
  const cardBorder         = dark ? 'rgba(139,92,246,0.15)'   : 'rgba(124,58,237,0.15)'
  const descText           = dark ? '#64748b'                 : '#6b5b95'
  const tagBg              = dark ? 'rgba(139,92,246,0.1)'    : 'rgba(124,58,237,0.08)'
  const tagBorder          = dark ? 'rgba(139,92,246,0.2)'    : 'rgba(124,58,237,0.18)'
  const secBtnBg           = dark ? 'rgba(139,92,246,0.08)'   : 'rgba(124,58,237,0.06)'
  const secBtnBorder       = dark ? 'rgba(139,92,246,0.2)'    : 'rgba(124,58,237,0.18)'

  return (
    <div style={{ minHeight:'100vh', padding:'100px 6%', background:bg }}>
      <div style={{ maxWidth:'1100px', margin:'0 auto' }}>

        <div style={{ marginBottom:'48px' }}>
          <div style={{ display:'inline-block', background:badgeBg, border:`1px solid ${badgeBorder}`, borderRadius:'50px', padding:'5px 16px', marginBottom:'16px' }}>
            <span style={{ color:accentText, fontSize:'12px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase' }}>Projects</span>
          </div>
          <h2 style={{ color:heading, fontSize:'42px', fontWeight:'900', letterSpacing:'-1px', marginBottom:'8px' }}>
            Benchmarked Projects
          </h2>
          <p style={{ color:muted, fontSize:'15px', marginBottom:'28px', maxWidth:'480px', lineHeight:1.7 }}>
            A selection of things I've built — click any card to explore it in detail.
          </p>
          <div style={{ display:'flex', gap:'10px' }}>
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding:'8px 20px', borderRadius:'50px',
                background: filter===f ? 'linear-gradient(135deg,#8b5cf6,#6366f1)' : filterInactiveBg,
                border: filter===f ? 'none' : `1px solid ${filterInactiveBdr}`,
                color: filter===f ? 'white' : filterInactiveText,
                fontWeight:'600', fontSize:'13px', cursor:'pointer',
                transition:'all 0.2s',
              }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'24px' }}>
          {filtered.map(p => (
            <TiltCard
              key={p.title} p={p}
              cardBg={cardBg} cardBorder={cardBorder}
              heading={heading} descText={descText}
              accentText={accentText} tagBg={tagBg}
              tagBorder={tagBorder} secBtnBg={secBtnBg}
              secBtnBorder={secBtnBorder}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <Modal
          p={selected} dark={dark} onClose={() => setSelected(null)}
          heading={heading} muted={muted} accentText={accentText}
          tagBg={tagBg} tagBorder={tagBorder}
          secBtnBg={secBtnBg} secBtnBorder={secBtnBorder}
          cardBorder={cardBorder}
        />
      )}

      <style>{`
        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform:translateY(30px) scale(0.97) } to { opacity:1; transform:translateY(0) scale(1) } }
        .project-card:hover .card-overlay { opacity: 1 !important; }
        .project-card:hover {
          box-shadow: 0 24px 48px rgba(139,92,246,0.2);
          border-color: rgba(139,92,246,0.4) !important;
        }
        .close-btn:hover {
          background: rgba(139,92,246,0.3) !important;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  )
}

export default Projects