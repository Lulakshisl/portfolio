import { useState, useContext } from 'react'
import { ThemeContext } from '../App'

const Icon = ({ type }: { type: string }) => {
  const props = { width:22, height:22, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round" as const, strokeLinejoin:"round" as const }
  switch(type) {
    case 'mail': return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    case 'phone': return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    case 'whatsapp': return <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.149.347-.347.521-.521.174-.174.247-.297.371-.495.124-.198.062-.371-.025-.52-.087-.149-.748-1.81-.999-2.443-.196-.504-.401-.466-.557-.467-.166-.001-.345-.002-.529-.002-.184 0-.5.067-.747.347-.247.279-.943.92-1.025 2.198-.082 1.278.62 2.564.747 2.747.124.176.166.227.297.396.124.155 1.292 1.94 2.93 2.71 1.62.762 1.92.62 2.32.578.397-.04 1.29-.527 1.473-1.038.184-.51.184-.948.13-1.038-.05-.087-.247-.149-.521-.297M12.05 2C6.5 2 2 6.477 2 11.99c0 2.122.667 4.099 1.84 5.71L2.65 21.5l3.91-1.275A9.973 9.973 0 0 0 12.05 22c5.55 0 10.05-4.477 10.05-9.99C22.1 6.477 17.6 2 12.05 2z"/></svg>
    case 'linkedin': return <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    case 'github': return <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    case 'resume': return <svg {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
    default: return null
  }
}

const Contact = () => {
  const { dark } = useContext(ThemeContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendWhatsApp = () => {
    const text = `Hi Lulakshi! I'm ${name} (${email}). ${message}`
    window.open(`https://wa.me/94750184902?text=${encodeURIComponent(text)}`, '_blank')
  }

  const contacts = [
    {icon:'mail',label:'EMAIL',value:'lulakshimadubashini@gmail.com',href:'mailto:lulakshimadubashini@gmail.com',highlight:false},
    {icon:'phone',label:'CALL ME',value:'+94 75 018 4902',href:'tel:+94750184902',highlight:false},
    {icon:'whatsapp',label:'WHATSAPP',value:'+94 75 018 4902',href:'https://wa.me/94750184902',highlight:true},
    {icon:'linkedin',label:'LINKEDIN',value:'in/lulakshi-madubashini',href:'https://linkedin.com',highlight:false},
    {icon:'github',label:'GITHUB',value:'@Lulakshisl',href:'https://github.com/Lulakshisl',highlight:false},
    {icon:'resume',label:'RESUME',value:'Download CV (PDF)',href:'/cv.pdf',highlight:false},
  ]

  const bg = dark ? 'linear-gradient(180deg,#0a0a18 0%,#080810 100%)' : 'linear-gradient(180deg,#ede9fe 0%,#f8f7ff 100%)'
  const heading = dark ? 'white' : '#1e1b4b'
  const muted = dark ? '#64748b' : '#7c6fa5'
  const accentText = dark ? '#a78bfa' : '#7c3aed'
  const badgeBg = dark ? 'rgba(139,92,246,0.1)' : 'rgba(124,58,237,0.08)'
  const badgeBorder = dark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)'
  const cardBg = dark ? 'rgba(14,14,28,0.8)' : 'rgba(255,255,255,0.8)'
  const cardBorder = dark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.15)'
  const valueText = dark ? '#e2e8f0' : '#1e1b4b'
  const iconBoxBg = dark ? 'rgba(139,92,246,0.12)' : 'rgba(124,58,237,0.08)'
  const formBg = dark ? 'rgba(20,20,38,0.9)' : 'rgba(255,255,255,0.95)'
  const formBorder = dark ? 'rgba(139,92,246,0.25)' : 'rgba(124,58,237,0.25)'
  const inputBg = dark ? 'rgba(8,8,20,0.8)' : 'rgba(245,243,255,0.9)'
  const inputBorder = dark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.18)'
  const inputText = dark ? 'white' : '#1e1b4b'
  const labelText = dark ? '#94a3b8' : '#6b5b95'

  const inp = {width:'100%',background:inputBg,border:`1px solid ${inputBorder}`,borderRadius:'10px',padding:'14px 16px',color:inputText,fontSize:'14px',outline:'none',boxSizing:'border-box' as const,fontFamily:'inherit'}

  return (
    <div style={{minHeight:'100vh',padding:'100px 6%',background:bg}}>
      <div style={{maxWidth:'1100px',margin:'0 auto'}}>

        <div style={{marginBottom:'60px'}}>
          <div style={{display:'inline-block',background:badgeBg,border:`1px solid ${badgeBorder}`,borderRadius:'50px',padding:'5px 16px',marginBottom:'16px'}}>
            <span style={{color:accentText,fontSize:'12px',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase'}}>Contact</span>
          </div>
          <h2 style={{color:heading,fontSize:'42px',fontWeight:'900',letterSpacing:'-1px',marginBottom:'12px'}}>Let's build something</h2>
          <p style={{color:muted,fontSize:'16px',maxWidth:'500px',lineHeight:'1.7'}}>I'm currently open to internship opportunities and freelance work. Reach out through any channel — I'll get back to you quickly.</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'start'}}>

          {/* Contact cards block */}
          <div>
            <h3 style={{color:heading,fontSize:'16px',fontWeight:'700',marginBottom:'16px',opacity:0.7}}>Contact Details</h3>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px'}}>
              {contacts.map(c=>(
                <a key={c.label} href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                  className="contact-card"
                  style={{background:c.highlight?'linear-gradient(135deg,#8b5cf6,#6366f1)':cardBg,border:c.highlight?'none':`1px solid ${cardBorder}`,borderRadius:'14px',padding:'18px',textDecoration:'none',display:'block'}}>
                  <div style={{
                    width:'40px',height:'40px',borderRadius:'10px',marginBottom:'10px',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    background: c.highlight ? 'rgba(255,255,255,0.18)' : iconBoxBg,
                    color: c.highlight ? 'white' : accentText
                  }}>
                    <Icon type={c.icon}/>
                  </div>
                  <div style={{color:c.highlight?'rgba(255,255,255,0.7)':accentText,fontSize:'10px',fontWeight:'700',letterSpacing:'1px',marginBottom:'4px'}}>{c.label}</div>
                  <div style={{color:c.highlight?'white':valueText,fontSize:'13px',fontWeight:'600'}}>{c.value}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Message form block - visually separated */}
          <div>
            <h3 style={{color:heading,fontSize:'16px',fontWeight:'700',marginBottom:'16px',opacity:0.7}}>Send a Message</h3>
            <div style={{background:formBg,border:`1px solid ${formBorder}`,borderRadius:'20px',padding:'32px',boxShadow:dark?'0 20px 50px rgba(139,92,246,0.1)':'0 20px 50px rgba(124,58,237,0.08)'}}>
              <p style={{color:muted,fontSize:'14px',marginBottom:'24px',lineHeight:'1.6'}}>Drop a message — it'll open in WhatsApp ready to send.</p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',marginBottom:'14px'}}>
                <div>
                  <label style={{color:labelText,fontSize:'11px',fontWeight:'700',letterSpacing:'1px',textTransform:'uppercase',display:'block',marginBottom:'6px'}}>Your Name</label>
                  <input value={name} onChange={e=>setName(e.target.value)} placeholder="Lushi wijesinghe" style={inp}/>
                </div>
                <div>
                  <label style={{color:labelText,fontSize:'11px',fontWeight:'700',letterSpacing:'1px',textTransform:'uppercase',display:'block',marginBottom:'6px'}}>Your Email</label>
                  <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="example@gmail.com" style={inp}/>
                </div>
              </div>
              <div style={{marginBottom:'24px'}}>
                <label style={{color:labelText,fontSize:'11px',fontWeight:'700',letterSpacing:'1px',textTransform:'uppercase',display:'block',marginBottom:'6px'}}>Your Message</label>
                <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell me about your project..." rows={5} style={{...inp,resize:'vertical'}}/>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <a href="mailto:lulakshimadubashini@gmail.com" style={{color:accentText,fontSize:'13px',fontWeight:'600',textDecoration:'none'}}>Prefer email?</a>
                <button onClick={sendWhatsApp} style={{background:'linear-gradient(135deg,#8b5cf6,#6366f1)',color:'white',padding:'12px 24px',borderRadius:'10px',fontWeight:'700',fontSize:'14px',border:'none',cursor:'pointer',boxShadow:'0 8px 24px rgba(139,92,246,0.3)'}}>
                  Send via WhatsApp →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .contact-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(139,92,246,0.25);
          border-color: #8b5cf6 !important;
        }
      `}</style>
    </div>
  )
}

export default Contact
