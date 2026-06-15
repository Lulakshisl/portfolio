import { useState } from 'react'

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

const Skills = () => {
  const [active, setActive] = useState('languages')
  const current = categories.find(c => c.id === active)!

  return (
    <div style={{minHeight:'100vh',padding:'100px 6%',background:'linear-gradient(180deg,#0a0a18 0%,#080810 100%)'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto'}}>

        <div style={{marginBottom:'60px'}}>
          <div style={{display:'inline-block',background:'rgba(139,92,246,0.1)',border:'1px solid rgba(139,92,246,0.3)',borderRadius:'50px',padding:'5px 16px',marginBottom:'16px'}}>
            <span style={{color:'#a78bfa',fontSize:'12px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase'}}>Skills</span>
          </div>
          <h2 style={{color:'white',fontSize:'42px',fontWeight:'900',letterSpacing:'-1px',marginBottom:'12px'}}>Tools I work with</h2>
          <p style={{color:'#64748b',fontSize:'16px'}}>Always eager to learn — picking up new frameworks, tools and patterns is part of the fun.</p>
        </div>

        <div style={{display:'flex',gap:'32px',alignItems:'flex-start'}}>

          <div style={{display:'flex',flexDirection:'column',gap:'8px',flexShrink:0,width:'200px'}}>
            {categories.map(cat => (
              <button key={cat.id} onClick={()=>setActive(cat.id)}
                style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 16px',borderRadius:'10px',background:active===cat.id?'linear-gradient(135deg,#8b5cf6,#6366f1)':'rgba(139,92,246,0.05)',border:active===cat.id?'none':'1px solid rgba(139,92,246,0.15)',color:active===cat.id?'white':'#94a3b8',fontWeight:active===cat.id?700:500,fontSize:'14px',cursor:'pointer',textAlign:'left',transition:'all 0.2s',boxShadow:active===cat.id?'0 8px 24px rgba(139,92,246,0.3)':'none'}}>
                <span style={{fontSize:'16px'}}>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{flex:1,background:'rgba(14,14,28,0.6)',border:'1px solid rgba(139,92,246,0.15)',borderRadius:'20px',padding:'32px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'28px'}}>
              <div style={{width:'36px',height:'36px',borderRadius:'8px',background:'rgba(139,92,246,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'16px'}}>{current.icon}</div>
              <h3 style={{color:'white',fontSize:'20px',fontWeight:'800'}}>{current.label}</h3>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'16px'}}>
              {current.skills.map(skill => (
                <div key={skill} style={{background:'rgba(8,8,20,0.8)',border:'1px solid rgba(139,92,246,0.15)',borderRadius:'14px',padding:'20px 24px',display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',minWidth:'100px'}}>
                  <div style={{width:'10px',height:'10px',borderRadius:'50%',background:'#8b5cf6',boxShadow:'0 0 10px rgba(139,92,246,0.6)'}}/>
                  <span style={{color:'#e2e8f0',fontSize:'13px',fontWeight:'600',textAlign:'center'}}>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
