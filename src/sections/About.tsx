import { useContext } from 'react'
import { ThemeContext } from '../App'

const About = () => {
  const { dark } = useContext(ThemeContext)
  const stats = [['10+','Projects'],['5+','Technologies'],['2+','Years Learning']]
  const info = [['Name','Lulakshi Madubashini'],['Country','Sri Lanka 🇱🇰'],['Email','lulakshimadubashini@gmail.com'],['Status','Open to Opportunities ✓']]

  const bg = dark ? 'linear-gradient(180deg,#080810 0%,#0a0a18 100%)' : 'linear-gradient(180deg,#f8f7ff 0%,#ede9fe 100%)'
  const heading = dark ? 'white' : '#1e1b4b'
  const muted = dark ? '#64748b' : '#7c6fa5'
  const accentText = dark ? '#a78bfa' : '#7c3aed'
  const badgeBg = dark ? 'rgba(139,92,246,0.1)' : 'rgba(124,58,237,0.08)'
  const badgeBorder = dark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)'
  const cardBg = dark ? 'rgba(139,92,246,0.07)' : 'rgba(124,58,237,0.06)'
  const cardBorder = dark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.18)'
  const infoBg = dark ? 'rgba(15,15,30,0.8)' : 'rgba(255,255,255,0.7)'
  const infoBorder = dark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.15)'
  const infoText = dark ? '#e2e8f0' : '#1e1b4b'
  const imgBorder = dark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)'

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'100px 6%',background:bg}}>
      <div style={{display:'flex',gap:'80px',alignItems:'center',maxWidth:'1100px',width:'100%'}}>

        <div style={{flexShrink:0,position:'relative'}}>
          <div style={{width:'340px',height:'400px',borderRadius:'24px',overflow:'hidden',border:`2px solid ${imgBorder}`,boxShadow:dark?'0 30px 80px rgba(139,92,246,0.15)':'0 30px 80px rgba(139,92,246,0.12)',position:'relative'}}>
            <img src="/lushi.png" alt="About" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            <div style={{position:'absolute',inset:0,background:dark?'linear-gradient(to top,rgba(8,8,16,0.6),transparent)':'linear-gradient(to top,rgba(124,58,237,0.15),transparent)'}}/>
          </div>
          <div style={{position:'absolute',bottom:'-20px',right:'-20px',background:'linear-gradient(135deg,#8b5cf6,#6366f1)',borderRadius:'16px',padding:'16px 20px',textAlign:'center',boxShadow:'0 10px 30px rgba(139,92,246,0.4)'}}>
            <div style={{color:'white',fontSize:'28px',fontWeight:'900'}}>2+</div>
            <div style={{color:'rgba(255,255,255,0.8)',fontSize:'11px',fontWeight:'600'}}>Years Learning</div>
          </div>
        </div>

        <div style={{flex:1}}>
          <div style={{display:'inline-block',background:badgeBg,border:`1px solid ${badgeBorder}`,borderRadius:'50px',padding:'5px 16px',marginBottom:'16px'}}>
            <span style={{color:accentText,fontSize:'12px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase'}}>About Me</span>
          </div>
          <h2 style={{color:heading,fontSize:'42px',fontWeight:'900',marginBottom:'20px',letterSpacing:'-1px',lineHeight:'1.1'}}>
            Turning ideas into<br/>
            <span style={{background:'linear-gradient(135deg,#8b5cf6,#a78bfa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>digital reality</span>
          </h2>
          <p style={{color:muted,fontSize:'16px',lineHeight:'1.9',marginBottom:'36px'}}>
            Hello! I'm <strong style={{color:accentText}}>Lulakshi Madubashini</strong>, a passionate Software Engineering student who loves building modern websites, mobile applications, and innovative digital solutions. My goal is to transform ideas into functional and visually appealing software products.
          </p>

          <div style={{display:'flex',gap:'20px',marginBottom:'36px'}}>
            {stats.map(([num,label]) => (
              <div key={label} style={{flex:1,background:cardBg,border:`1px solid ${cardBorder}`,borderRadius:'16px',padding:'20px',textAlign:'center'}}>
                <div style={{color:'#8b5cf6',fontSize:'30px',fontWeight:'900',lineHeight:1}}>{num}</div>
                <div style={{color:muted,fontSize:'13px',marginTop:'6px',fontWeight:'500'}}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginBottom:'36px'}}>
            {info.map(([label,value]) => (
              <div key={label} style={{background:infoBg,border:`1px solid ${infoBorder}`,borderRadius:'12px',padding:'14px 18px'}}>
                <div style={{color:'#8b5cf6',fontSize:'10px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'4px'}}>{label}</div>
                <div style={{color:infoText,fontSize:'13px',fontWeight:'500'}}>{value}</div>
              </div>
            ))}
          </div>

          <a href="#contact" style={{background:'linear-gradient(135deg,#8b5cf6,#6366f1)',color:'white',padding:'14px 32px',borderRadius:'10px',fontWeight:'700',textDecoration:'none',fontSize:'14px',display:'inline-block',boxShadow:'0 8px 24px rgba(139,92,246,0.3)'}}>
            Get In Touch →
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
g
