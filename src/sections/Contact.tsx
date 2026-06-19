import { useState, useContext } from 'react'
import { ThemeContext } from '../App'

const Icon = ({ type }: { type: string }) => {
  const props = { width:24, height:24, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round" as const, strokeLinejoin:"round" as const }
  switch(type) {
    case 'mail':     return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    case 'phone':    return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    case 'whatsapp': return (
      <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
        <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.67 4.785 1.84 6.77L2 30l7.43-1.802A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.4a11.33 11.33 0 0 1-5.78-1.583l-.414-.246-4.41 1.07 1.1-4.296-.27-.44A11.37 11.37 0 0 1 4.6 16.003c0-6.29 5.114-11.403 11.403-11.403S27.4 9.713 27.4 16.003 22.29 27.4 16.003 27.4zm6.27-8.536c-.344-.172-2.034-1.003-2.348-1.118-.314-.115-.543-.172-.772.172-.229.344-.886 1.118-1.086 1.347-.2.23-.4.258-.743.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.021-.53.15-.702.155-.154.344-.4.516-.601.172-.2.23-.344.344-.573.115-.229.058-.43-.029-.601-.086-.172-.772-1.862-1.057-2.549-.279-.668-.562-.578-.772-.589l-.657-.011c-.229 0-.6.086-.914.43-.314.343-1.2 1.174-1.2 2.863 0 1.69 1.229 3.322 1.4 3.551.172.229 2.42 3.694 5.863 5.18.82.354 1.46.565 1.958.723.823.261 1.572.224 2.164.136.66-.099 2.034-.832 2.32-1.635.287-.803.287-1.49.2-1.635-.084-.144-.313-.23-.657-.4z"/>
      </svg>
    )
    case 'linkedin': return <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    case 'github':   return <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    default: return null
  }
}

const ContactRow = ({ c, dark, cardBg, cardBorder, muted, isFirst, isLast }: {
  c: { icon: string, label: string, value: string, href: string }
  dark: boolean, cardBg: string, cardBorder: string, muted: string
  isFirst: boolean, isLast: boolean
}) => {
  const lineColor = dark ? 'rgba(139,92,246,0.35)' : 'rgba(124,58,237,0.25)'
  const handleClick = () => {
    window.open(c.href, c.href.startsWith('http') ? '_blank' : '_self')
  }
  return (
    <div style={{ position:'relative' }}>

      {/* TOP horizontal line — only on first (WhatsApp) card */}
      {isFirst && (
        <div style={{
          height:'1px',
          background:`linear-gradient(to right, transparent, ${lineColor}, transparent)`,
          marginBottom:'0',
        }}/>
      )}

      {/* The card itself */}
      <div onClick={handleClick} className="contact-row" style={{
        display:'flex', alignItems:'center', gap:'20px',
        background:cardBg, border:`1px solid ${cardBorder}`,
        borderRadius:'16px', padding:'18px 24px', margin:'10px 0',
        cursor:'pointer', transition:'all 0.25s cubic-bezier(.4,0,.2,1)',
      }}>
        <div className="contact-icon-box" style={{
          width:'52px', height:'52px', borderRadius:'13px', flexShrink:0,
          background: dark ? 'rgba(139,92,246,0.12)' : 'rgba(124,58,237,0.08)',
          border:`1px solid ${dark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.2)'}`,
          display:'flex', alignItems:'center', justifyContent:'center',
          color: dark ? 'rgba(167,139,250,0.5)' : 'rgba(124,58,237,0.4)',
          transition:'all 0.25s ease',
        }}>
          <Icon type={c.icon}/>
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ color:muted, fontSize:'11px', fontWeight:'700', letterSpacing:'1.5px', textTransform:'uppercase' as const, marginBottom:'4px' }}>
            {c.label}
          </div>
          <div className="contact-value" style={{ color: dark ? '#e2e8f0' : '#1e1b4b', fontSize:'14px', fontWeight:'600', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' as const, transition:'color 0.25s' }}>
            {c.value}
          </div>
        </div>
      </div>

      {/* BOTTOM horizontal line — only on last (GitHub) card */}
      {isLast && (
        <div style={{
          height:'1px',
          background:`linear-gradient(to right, transparent, ${lineColor}, transparent)`,
          marginTop:'0',
        }}/>
      )}
    </div>
  )
}

const Contact = () => {
  const { dark } = useContext(ThemeContext)
  const [name,     setName]     = useState('')
  const [email,    setEmail]    = useState('')
  const [message,  setMessage]  = useState('')
  const [sent,     setSent]     = useState(false)
  const [nameErr,  setNameErr]  = useState('')
  const [emailErr, setEmailErr] = useState('')

  const handleSend = () => {
    let nErr = ''
    let eErr = ''
    if (!name.trim()) { nErr = 'Name is required' }
    else if (name.trim().length < 2) { nErr = 'At least 2 characters required' }
    if (!email.trim()) { eErr = 'Email is required' }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { eErr = 'Enter a valid email address' }
    setNameErr(nErr)
    setEmailErr(eErr)
    if (nErr || eErr || !message.trim()) return
    const text = `Hi Lulakshi! I'm ${name} (${email}). ${message}`
    window.open(`https://wa.me/94750184902?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
    setTimeout(() => {
      setSent(false); setName(''); setEmail(''); setMessage(''); setNameErr(''); setEmailErr('')
    }, 3000)
  }

  const contacts = [
    { icon:'whatsapp', label:'WhatsApp', value:'+94 75 018 4902',              href:'https://wa.me/94750184902' },
    { icon:'mail',     label:'Email',    value:'lulakshimadubashini@gmail.com', href:'mailto:lulakshimadubashini@gmail.com' },
    { icon:'phone',    label:'Phone',    value:'+94 75 018 4902',               href:'tel:+94750184902' },
    { icon:'linkedin', label:'LinkedIn', value:'lulakshi-madubashini',          href:'https://www.linkedin.com/in/lulakshi-madubashini-3177aa2a4/?skipRedirect=true' },
    { icon:'github',   label:'GitHub',   value:'@Lulakshisl',                   href:'https://github.com/Lulakshisl' },
  ]

  const bg          = dark ? 'linear-gradient(180deg,#0a0a18 0%,#080810 100%)' : 'linear-gradient(180deg,#ede9fe 0%,#f8f7ff 100%)'
  const muted       = dark ? '#475569'               : '#7c6fa5'
  const accentText  = dark ? '#a78bfa'               : '#7c3aed'
  const badgeBg     = dark ? 'rgba(139,92,246,0.1)'  : 'rgba(124,58,237,0.08)'
  const badgeBorder = dark ? 'rgba(139,92,246,0.3)'  : 'rgba(124,58,237,0.25)'
  const cardBg      = dark ? 'rgba(14,14,28,0.85)'   : 'rgba(255,255,255,0.9)'
  const cardBorder  = dark ? 'rgba(139,92,246,0.12)' : 'rgba(124,58,237,0.12)'
  const formBg      = dark ? 'rgba(14,14,28,0.9)'    : 'rgba(255,255,255,0.98)'
  const formBorder  = dark ? 'rgba(139,92,246,0.18)' : 'rgba(124,58,237,0.18)'
  const inputText   = dark ? '#ffffff'               : '#1e1b4b'
  const labelText   = dark ? '#64748b'               : '#7c6fa5'
  const lineNormal  = dark ? 'rgba(139,92,246,0.3)'  : 'rgba(124,58,237,0.25)'
  const orb1        = dark ? 'rgba(139,92,246,0.06)' : 'rgba(124,58,237,0.05)'
  const orb2        = dark ? 'rgba(99,102,241,0.05)' : 'rgba(99,102,241,0.04)'

  const fieldStyle = (hasErr: boolean): React.CSSProperties => ({
    width:'100%', background:'transparent', border:'none',
    borderBottom:`1.5px solid ${hasErr ? '#f87171' : lineNormal}`,
    borderRadius:'0', padding:'10px 0', color:inputText, fontSize:'15px',
    outline:'none', boxSizing:'border-box', fontFamily:'inherit', transition:'border-color 0.2s',
  })

  const ErrLine = ({ msg }: { msg: string }) => (
    <div style={{ display:'flex', alignItems:'center', gap:'5px', marginTop:'7px' }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <span style={{ color:'#f87171', fontSize:'11px', fontWeight:'600' }}>{msg}</span>
    </div>
  )

  return (
    <div style={{ minHeight:'100vh', padding:'100px 6%', background:bg, position:'relative', overflow:'hidden' }}>

      <div style={{ position:'absolute', top:'8%',     right:'4%', width:'380px', height:'380px', borderRadius:'50%', background:orb1, filter:'blur(80px)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'10%', left:'2%',  width:'280px', height:'280px', borderRadius:'50%', background:orb2, filter:'blur(60px)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative' }}>

        {/* Header */}
        <div style={{ marginBottom:'64px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:badgeBg, border:`1px solid ${badgeBorder}`, borderRadius:'50px', padding:'6px 16px', marginBottom:'20px' }}>
            <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#8b5cf6', display:'inline-block', animation:'pulse-dot 2s ease-in-out infinite' }}/>
            <span style={{ color:accentText, fontSize:'11px', fontWeight:'700', letterSpacing:'2.5px', textTransform:'uppercase' }}>Contact</span>
          </div>
          <h2 style={{ fontSize:'clamp(34px,5vw,52px)', fontWeight:'900', letterSpacing:'-2px', lineHeight:1.05, margin:'0 0 20px 0' }}>
            <span style={{ color: dark ? '#ffffff' : '#1e1b4b' }}>{"Let's build "}</span>
            <span style={{ background:'linear-gradient(135deg,#8b5cf6,#a78bfa,#6366f1)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              something great.
            </span>
          </h2>
          <p style={{ color:muted, fontSize:'16px', maxWidth:'480px', lineHeight:1.75, margin:0 }}>
            Open to internships, freelance work, and collaborations. I respond within 24 hours — let's turn your idea into reality.
          </p>
        </div>

        {/* Two columns */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:'40px', alignItems:'start' }}>

          {/* LEFT */}
          <div>
            <p style={{ color:muted, fontSize:'12px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'20px' }}>
              Reach me via
            </p>
            <div style={{ display:'flex', flexDirection:'column' }}>
              {contacts.map((c, i) => (
                <ContactRow
                  key={c.label}
                  c={c}
                  dark={dark}
                  cardBg={cardBg}
                  cardBorder={cardBorder}
                  muted={muted}
                  isFirst={i === 0}
                  isLast={i === contacts.length - 1}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div style={{
            background:formBg, border:`1px solid ${formBorder}`,
            borderRadius:'24px', padding:'40px',
            backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
            boxShadow: dark ? '0 24px 60px rgba(139,92,246,0.1)' : '0 24px 60px rgba(124,58,237,0.08)',
            position:'relative', overflow:'hidden',
          }}>
            <div style={{ position:'absolute', top:'-40px', right:'-40px', width:'160px', height:'160px', borderRadius:'50%', background: dark ? 'rgba(139,92,246,0.08)' : 'rgba(124,58,237,0.06)', filter:'blur(40px)', pointerEvents:'none' }}/>

            <div style={{ marginBottom:'28px' }}>
              <label style={{ color:labelText, fontSize:'11px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase' as const, display:'block', marginBottom:'10px' }}>Name</label>
              <input value={name} onChange={e => { setName(e.target.value); if (nameErr) setNameErr('') }} style={fieldStyle(!!nameErr)} className="contact-input"/>
              {nameErr && <ErrLine msg={nameErr}/>}
            </div>

            <div style={{ marginBottom:'28px' }}>
              <label style={{ color:labelText, fontSize:'11px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase' as const, display:'block', marginBottom:'10px' }}>Email</label>
              <input value={email} onChange={e => { setEmail(e.target.value); if (emailErr) setEmailErr('') }} style={fieldStyle(!!emailErr)} className="contact-input"/>
              {emailErr && <ErrLine msg={emailErr}/>}
            </div>

            <div style={{ marginBottom:'36px' }}>
              <label style={{ color:labelText, fontSize:'11px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase' as const, display:'block', marginBottom:'10px' }}>Message</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} style={{ ...fieldStyle(false), resize:'none' }} className="contact-input"/>
            </div>

            <button onClick={handleSend} className="send-btn" style={{
              width:'100%',
              background: sent ? 'linear-gradient(135deg,#10b981,#059669)' : 'linear-gradient(135deg,#8b5cf6,#7c3aed,#6366f1)',
              color:'#ffffff', padding:'16px', borderRadius:'50px', fontWeight:'800', fontSize:'15px',
              border:'none', cursor:'pointer',
              boxShadow: sent ? '0 8px 24px rgba(16,185,129,0.45)' : '0 8px 32px rgba(124,58,237,0.6)',
              transition:'all 0.3s ease', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', letterSpacing:'0.3px',
            }}>
              {sent ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style={{ color:'#ffffff', fontWeight:'800' }}>Sent!</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 32 32" width="18" height="18" fill="#ffffff">
                    <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.67 4.785 1.84 6.77L2 30l7.43-1.802A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.4a11.33 11.33 0 0 1-5.78-1.583l-.414-.246-4.41 1.07 1.1-4.296-.27-.44A11.37 11.37 0 0 1 4.6 16.003c0-6.29 5.114-11.403 11.403-11.403S27.4 9.713 27.4 16.003 22.29 27.4 16.003 27.4zm6.27-8.536c-.344-.172-2.034-1.003-2.348-1.118-.314-.115-.543-.172-.772.172-.229.344-.886 1.118-1.086 1.347-.2.23-.4.258-.743.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.021-.53.15-.702.155-.154.344-.4.516-.601.172-.2.23-.344.344-.573.115-.229.058-.43-.029-.601-.086-.172-.772-1.862-1.057-2.549-.279-.668-.562-.578-.772-.589l-.657-.011c-.229 0-.6.086-.914.43-.314.343-1.2 1.174-1.2 2.863 0 1.69 1.229 3.322 1.4 3.551.172.229 2.42 3.694 5.863 5.18.82.354 1.46.565 1.958.723.823.261 1.572.224 2.164.136.66-.099 2.034-.832 2.32-1.635.287-.803.287-1.49.2-1.635-.084-.144-.313-.23-.657-.4z"/>
                  </svg>
                  <span style={{ color:'#ffffff', fontWeight:'800' }}>Send via WhatsApp</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity:1;  transform:scale(1);   }
          50%       { opacity:.4; transform:scale(1.5); }
        }
        .contact-row:hover {
          border-color: rgba(139,92,246,0.4) !important;
          box-shadow: 0 4px 20px rgba(139,92,246,0.12);
        }
        .contact-row:hover .contact-icon-box {
          background: linear-gradient(135deg,#8b5cf6,#6366f1) !important;
          border-color: transparent !important;
          color: white !important;
          box-shadow: 0 6px 20px rgba(139,92,246,0.45);
          transform: scale(1.05);
        }
        .contact-row:hover .contact-value {
          color: #a78bfa !important;
        }
        .contact-input:focus {
          border-bottom-color: #8b5cf6 !important;
        }
        .send-btn:hover {
          background: linear-gradient(135deg,#7c3aed,#6d28d9,#4f46e5) !important;
          transform: translateY(-2px);
          box-shadow: 0 16px 44px rgba(124,58,237,0.7) !important;
        }
        .send-btn:active { transform: translateY(0); }
      `}</style>
    </div>
  )
}


export default Contact
