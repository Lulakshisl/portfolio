import { useContext } from 'react'
import { ThemeContext } from '../App'

const Footer = () => {
  const { dark } = useContext(ThemeContext)
  const bg = dark ? '#080810' : '#f3f0ff'
  const border = dark ? 'rgba(139,92,246,0.1)' : 'rgba(124,58,237,0.12)'
  const logoText = dark ? 'white' : '#1e1b4b'
  const copyText = dark ? '#475569' : '#7c6fa5'
  const linkText = dark ? '#64748b' : '#6b5b95'

  return (
    <div style={{background:bg,borderTop:`1px solid ${border}`,padding:'32px 6%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{fontWeight:900,fontSize:'18px'}}>
        <span style={{color:logoText}}>lulakshi</span>
        <span style={{color:'#8b5cf6'}}>.</span>
        <span style={{color:'#a78bfa'}}>dev</span>
      </div>
      <p style={{color:copyText,fontSize:'13px',margin:0}}>© 2026 Lulakshi Madubashini. All rights reserved.</p>
      <div style={{display:'flex',gap:'20px'}}>
        {[['GitHub','https://github.com/Lulakshisl'],['LinkedIn','https://www.linkedin.com/in/lulakshi-madubashini-3177aa2a4/'],['Email','mailto:lulakshimadubashini@gmail.com']].map(([label,href])=>(
          <a key={label} href={href} target="_blank" rel="noreferrer" style={{color:linkText,fontSize:'13px',fontWeight:'600',textDecoration:'none'}}>
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer
