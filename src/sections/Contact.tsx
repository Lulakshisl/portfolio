import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendWhatsApp = () => {
    const text = `Hi Lulakshi! I'm ${name} (${email}). ${message}`
    window.open(`https://wa.me/94762047659?text=${encodeURIComponent(text)}`, '_blank')
  }

  const contacts = [
    {icon:'✉',label:'EMAIL',value:'lulakshimadubashini@gmail.com',href:'mailto:lulakshimadubashini@gmail.com',highlight:false},
    {icon:'📞',label:'CALL ME',value:'+94 76 204 7659',href:'tel:+94762047659',highlight:false},
    {icon:'💬',label:'WHATSAPP',value:'+94 76 204 7659',href:'https://wa.me/94762047659',highlight:true},
    {icon:'💼',label:'LINKEDIN',value:'in/lulakshi-madubashini',href:'https://linkedin.com',highlight:false},
    {icon:'🐙',label:'GITHUB',value:'@Lulakshisl',href:'https://github.com/Lulakshisl',highlight:false},
    {icon:'📄',label:'RESUME',value:'Download CV (PDF)',href:'/cv.pdf',highlight:false},
  ]

  const inp = {width:'100%',background:'rgba(14,14,28,0.8)',border:'1px solid rgba(139,92,246,0.2)',borderRadius:'10px',padding:'14px 16px',color:'white',fontSize:'14px',outline:'none',boxSizing:'border-box' as const,fontFamily:'inherit'}

  return (
    <div style={{minHeight:'100vh',padding:'100px 6%',background:'linear-gradient(180deg,#0a0a18 0%,#080810 100%)'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto'}}>

        <div style={{marginBottom:'60px'}}>
          <div style={{display:'inline-block',background:'rgba(139,92,246,0.1)',border:'1px solid rgba(139,92,246,0.3)',borderRadius:'50px',padding:'5px 16px',marginBottom:'16px'}}>
            <span style={{color:'#a78bfa',fontSize:'12px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase'}}>Contact</span>
          </div>
          <h2 style={{color:'white',fontSize:'42px',fontWeight:'900',letterSpacing:'-1px',marginBottom:'12px'}}>Let's build something</h2>
          <p style={{color:'#64748b',fontSize:'16px',maxWidth:'500px',lineHeight:'1.7'}}>I'm currently open to internship opportunities and freelance work. Reach out through any channel — I'll get back to you quickly.</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'start'}}>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px'}}>
            {contacts.map(c=>(
              <a key={c.label} href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                style={{background:c.highlight?'linear-gradient(135deg,#8b5cf6,#6366f1)':'rgba(14,14,28,0.8)',border:c.highlight?'none':'1px solid rgba(139,92,246,0.15)',borderRadius:'14px',padding:'18px',textDecoration:'none',display:'block',boxShadow:c.highlight?'0 8px 30px rgba(139,92,246,0.3)':'none'}}>
                <div style={{fontSize:'24px',marginBottom:'8px'}}>{c.icon}</div>
                <div style={{color:c.highlight?'rgba(255,255,255,0.7)':'#8b5cf6',fontSize:'10px',fontWeight:'700',letterSpacing:'1px',marginBottom:'4px'}}>{c.label}</div>
                <div style={{color:c.highlight?'white':'#e2e8f0',fontSize:'13px',fontWeight:'600'}}>{c.value}</div>
              </a>
            ))}
          </div>

          <div style={{background:'rgba(14,14,28,0.6)',border:'1px solid rgba(139,92,246,0.15)',borderRadius:'20px',padding:'32px'}}>
            <p style={{color:'#64748b',fontSize:'14px',marginBottom:'24px',lineHeight:'1.6'}}>Drop a message — it'll open in WhatsApp ready to send.</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',marginBottom:'14px'}}>
              <div>
                <label style={{color:'#94a3b8',fontSize:'11px',fontWeight:'700',letterSpacing:'1px',textTransform:'uppercase',display:'block',marginBottom:'6px'}}>Your Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="Jane Cooper" style={inp}/>
              </div>
              <div>
                <label style={{color:'#94a3b8',fontSize:'11px',fontWeight:'700',letterSpacing:'1px',textTransform:'uppercase',display:'block',marginBottom:'6px'}}>Your Email</label>
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="jane@example.com" style={inp}/>
              </div>
            </div>
            <div style={{marginBottom:'24px'}}>
              <label style={{color:'#94a3b8',fontSize:'11px',fontWeight:'700',letterSpacing:'1px',textTransform:'uppercase',display:'block',marginBottom:'6px'}}>Your Message</label>
              <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell me about your project..." rows={5} style={{...inp,resize:'vertical'}}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <a href="mailto:lulakshimadubashini@gmail.com" style={{color:'#8b5cf6',fontSize:'13px',fontWeight:'600',textDecoration:'none'}}>Prefer email?</a>
              <button onClick={sendWhatsApp} style={{background:'linear-gradient(135deg,#8b5cf6,#6366f1)',color:'white',padding:'12px 24px',borderRadius:'10px',fontWeight:'700',fontSize:'14px',border:'none',cursor:'pointer',boxShadow:'0 8px 24px rgba(139,92,246,0.3)'}}>
                Send via WhatsApp →
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
