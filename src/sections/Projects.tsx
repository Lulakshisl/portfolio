import { useState } from 'react'

const projects = [
  {title:'Cafe Lounge – Booking & Ordering',desc:'Relaxed cafe workspace platform — book a table, browse the menu, place orders and manage bookings in one cohesive experience.',tags:['React','TypeScript','Tailwind','Node.js'],type:'Web',demo:'',code:'https://github.com/Lulakshisl',color:'#8b5cf6'},
  {title:'Medicare – Healthcare Management',desc:'Full-stack healthcare platform with appointment booking, patient management, pharmacy orders, diagnostic tests and role-based admin.',tags:['MongoDB','Express','React','Node.js'],type:'Web',demo:'#',code:'https://github.com/Lulakshisl',color:'#6366f1'},
  {title:'Telemedicine Platform',desc:'Production-ready microservices telemedicine platform with Docker, Kubernetes, API Gateway and Kafka for real-time communication.',tags:['MERN','Kafka','Docker','Kubernetes'],type:'Enterprise',demo:'',code:'https://github.com/Lulakshisl',color:'#a78bfa'},
]

const filters = ['All','Web','Mobile','Enterprise']

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const filtered = filter==='All' ? projects : projects.filter(p=>p.type===filter)

  return (
    <div style={{minHeight:'100vh',padding:'100px 6%',background:'linear-gradient(180deg,#080810 0%,#0a0a18 100%)'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto'}}>

        <div style={{marginBottom:'48px'}}>
          <div style={{display:'inline-block',background:'rgba(139,92,246,0.1)',border:'1px solid rgba(139,92,246,0.3)',borderRadius:'50px',padding:'5px 16px',marginBottom:'16px'}}>
            <span style={{color:'#a78bfa',fontSize:'12px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase'}}>Projects</span>
          </div>
          <h2 style={{color:'white',fontSize:'42px',fontWeight:'900',letterSpacing:'-1px',marginBottom:'32px'}}>Selected work</h2>
          <div style={{display:'flex',gap:'10px'}}>
            {filters.map(f=>(
              <button key={f} onClick={()=>setFilter(f)} style={{padding:'8px 20px',borderRadius:'50px',background:filter===f?'linear-gradient(135deg,#8b5cf6,#6366f1)':'rgba(139,92,246,0.05)',border:filter===f?'none':'1px solid rgba(139,92,246,0.2)',color:filter===f?'white':'#94a3b8',fontWeight:'600',fontSize:'13px',cursor:'pointer'}}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>
          {filtered.map(p=>(
            <div key={p.title} style={{background:'rgba(14,14,28,0.8)',border:'1px solid rgba(139,92,246,0.15)',borderRadius:'20px',overflow:'hidden'}}>
              <div style={{height:'160px',background:`linear-gradient(135deg,${p.color}20,${p.color}08)`,display:'flex',alignItems:'center',justifyContent:'center',borderBottom:'1px solid rgba(139,92,246,0.1)',position:'relative'}}>
                <div style={{background:`${p.color}25`,border:`1px solid ${p.color}50`,borderRadius:'8px',padding:'5px 12px',color:p.color,fontSize:'11px',fontWeight:'700',letterSpacing:'1px',position:'absolute',top:'16px',left:'16px'}}>
                  {p.type}
                </div>
                <span style={{fontSize:'40px',opacity:0.2}}>{'</>'}</span>
              </div>
              <div style={{padding:'24px'}}>
                <h3 style={{color:'white',fontSize:'15px',fontWeight:'800',marginBottom:'10px',lineHeight:'1.3'}}>{p.title}</h3>
                <p style={{color:'#64748b',fontSize:'13px',lineHeight:'1.7',marginBottom:'16px'}}>{p.desc}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'20px'}}>
                  {p.tags.map(tag=>(
                    <span key={tag} style={{background:'rgba(139,92,246,0.1)',border:'1px solid rgba(139,92,246,0.2)',color:'#a78bfa',fontSize:'11px',fontWeight:'600',padding:'3px 10px',borderRadius:'50px'}}>{tag}</span>
                  ))}
                </div>
                <div style={{display:'flex',gap:'10px',borderTop:'1px solid rgba(139,92,246,0.1)',paddingTop:'16px'}}>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" style={{flex:1,background:'linear-gradient(135deg,#8b5cf6,#6366f1)',color:'white',padding:'8px',borderRadius:'8px',textDecoration:'none',fontSize:'12px',fontWeight:'700',textAlign:'center'}}>Live Demo ↗</a>
                  )}
                  <a href={p.code} target="_blank" rel="noreferrer" style={{flex:1,background:'rgba(139,92,246,0.08)',border:'1px solid rgba(139,92,246,0.2)',color:'#a78bfa',padding:'8px',borderRadius:'8px',textDecoration:'none',fontSize:'12px',fontWeight:'700',textAlign:'center'}}>View Code</a>
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
