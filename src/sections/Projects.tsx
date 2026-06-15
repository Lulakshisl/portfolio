import { useState, useContext } from 'react'
import { ThemeContext } from '../App'

const projects = [
  {title:'Coconut Plantation System',desc:'Relaxed cafe workspace platform — book a table, browse the menu, place orders and manage bookings in one cohesive experience.',tags:['React','Laravel','mongodb'],type:'Web',demo:'#',code:'https://github.com/Lulakshisl',color:'#8b5cf6',src:'/coconut.png'},
  {title:'Coffee Shop Appt',desc:' Coffee ordering platform with menu browsing, inventory management and customer order tracking.',tags:['MongoDB','Express','React','Node.js'],type:'Web',demo:'#',code:'https://github.com/Lulakshisl',color:'#6366f1',src:'/coffee.png'},
  {title:'FinPay Wallet App',desc:'Mobile wallet application with secure transactions, balance management and transfer history..',tags:['Flutter','Dart','Firebase','Google Maps API'],type:'Enterprise',demo:'#',code:'https://github.com/Lulakshisl',color:'#a78bfa',src:'/FinPay Wallet mobile_app.png'},
  {title:'portfolio project',desc:'A modern portfolio website built with React ,vite &TypeScript, featuring smooth animations, responsive design, and a dark mode toggle for an engaging user experience.',tags:['React','TypeScript','Vite','Tailwind'],type:'Web',demo:'#',code:'https://github.com/Lulakshisl',color:'#7c3aed',src:'/portfolio.png'},
  {title:'RidePark App',desc:'Smart parking application with slot booking, location tracking and user management features.',tags:['Kotlin','Java'],type:'Mobile',demo:'#',code:'https://github.com/Lulakshisl',color:'#8b5cf6',src:'/mobailapp.png'},
  
]


const filters = ['All','Web','Mobile','Enterprise']

const Projects = () => {
  const { dark } = useContext(ThemeContext)
  const [filter, setFilter] = useState('All')
  const filtered = filter==='All' ? projects : projects.filter(p=>p.type===filter)

  const bg = dark ? 'linear-gradient(180deg,#080810 0%,#0a0a18 100%)' : 'linear-gradient(180deg,#f8f7ff 0%,#ede9fe 100%)'
  const heading = dark ? 'white' : '#1e1b4b'
  const muted = dark ? '#64748b' : '#7c6fa5'
  const accentText = dark ? '#a78bfa' : '#7c3aed'
  const badgeBg = dark ? 'rgba(139,92,246,0.1)' : 'rgba(124,58,237,0.08)'
  const badgeBorder = dark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)'
  const filterInactiveBg = dark ? 'rgba(139,92,246,0.05)' : 'rgba(124,58,237,0.04)'
  const filterInactiveBorder = dark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.18)'
  const filterInactiveText = dark ? '#94a3b8' : '#6b5b95'
  const cardBg = dark ? 'rgba(14,14,28,0.8)' : 'rgba(255,255,255,0.8)'
  const cardBorder = dark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.15)'
  const descText = dark ? '#64748b' : '#6b5b95'
  const tagBg = dark ? 'rgba(139,92,246,0.1)' : 'rgba(124,58,237,0.08)'
  const tagBorder = dark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.18)'
  const secBtnBg = dark ? 'rgba(139,92,246,0.08)' : 'rgba(124,58,237,0.06)'
  const secBtnBorder = dark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.18)'

  return (
    <div style={{minHeight:'100vh',padding:'100px 6%',background:bg}}>
      <div style={{maxWidth:'1100px',margin:'0 auto'}}>

        <div style={{marginBottom:'48px'}}>
          <div style={{display:'inline-block',background:badgeBg,border:`1px solid ${badgeBorder}`,borderRadius:'50px',padding:'5px 16px',marginBottom:'16px'}}>
            <span style={{color:accentText,fontSize:'12px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase'}}>Projects</span>
          </div>
          <h2 style={{color:heading,fontSize:'42px',fontWeight:'900',letterSpacing:'-1px',marginBottom:'32px'}}>Selected work</h2>
          <div style={{display:'flex',gap:'10px'}}>
            {filters.map(f=>(
              <button key={f} onClick={()=>setFilter(f)} style={{padding:'8px 20px',borderRadius:'50px',
                background:filter===f?'linear-gradient(135deg,#8b5cf6,#6366f1)':filterInactiveBg,
                border:filter===f?'none':`1px solid ${filterInactiveBorder}`,
                color:filter===f?'white':filterInactiveText,
                fontWeight:'600',fontSize:'13px',cursor:'pointer'}}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>
          {filtered.map(p=>(
            <div key={p.title} style={{background:cardBg,border:`1px solid ${cardBorder}`,borderRadius:'20px',overflow:'hidden'}}>
              <div style={{height:'160px',background:`linear-gradient(135deg,${p.color}20,${p.color}08)`,display:'flex',alignItems:'center',justifyContent:'center',borderBottom:`1px solid ${cardBorder}`,position:'relative'}}>
                <div style={{background:`${p.color}25`,border:`1px solid ${p.color}50`,borderRadius:'8px',padding:'5px 12px',color:p.color,fontSize:'11px',fontWeight:'700',letterSpacing:'1px',position:'absolute',top:'16px',left:'16px'}}>
                  {p.type}
                </div>
                {p.src ? (
                  <img src={p.src} alt={p.title} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                ) : (
                  <span style={{fontSize:'40px',opacity:0.2,color:heading}}>{'</>'}</span>
                )}
              </div>
              <div style={{padding:'24px'}}>
                <h3 style={{color:heading,fontSize:'15px',fontWeight:'800',marginBottom:'10px',lineHeight:'1.3'}}>{p.title}</h3>
                <p style={{color:descText,fontSize:'13px',lineHeight:'1.7',marginBottom:'16px'}}>{p.desc}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'20px'}}>
                  {p.tags.map(tag=>(
                    <span key={tag} style={{background:tagBg,border:`1px solid ${tagBorder}`,color:accentText,fontSize:'11px',fontWeight:'600',padding:'3px 10px',borderRadius:'50px'}}>{tag}</span>
                  ))}
                </div>
                <div style={{display:'flex',gap:'10px',borderTop:`1px solid ${cardBorder}`,paddingTop:'16px'}}>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" style={{flex:1,background:'linear-gradient(135deg,#8b5cf6,#6366f1)',color:'white',padding:'8px',borderRadius:'8px',textDecoration:'none',fontSize:'12px',fontWeight:'700',textAlign:'center'}}>Live Demo ↗</a>
                  )}
                  <a href={p.code} target="_blank" rel="noreferrer" style={{flex:1,background:secBtnBg,border:`1px solid ${secBtnBorder}`,color:accentText,padding:'8px',borderRadius:'8px',textDecoration:'none',fontSize:'12px',fontWeight:'700',textAlign:'center'}}>View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects
