const Footer = () => (
  <div style={{background:'#080810',borderTop:'1px solid rgba(139,92,246,0.1)',padding:'32px 6%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <div style={{fontWeight:900,fontSize:'18px'}}>
      <span style={{color:'white'}}>lulakshi</span>
      <span style={{color:'#8b5cf6'}}>.</span>
      <span style={{color:'#a78bfa'}}>dev</span>
    </div>
    <p style={{color:'#475569',fontSize:'13px',margin:0}}>© 2026 Lulakshi Madubashini. All rights reserved.</p>
    <div style={{display:'flex',gap:'20px'}}>
      {[['GitHub','https://github.com/Lulakshisl'],['LinkedIn','https://linkedin.com'],['Email','mailto:lulakshimadubashini@gmail.com']].map(([label,href])=>(
        <a key={label} href={href} target="_blank" rel="noreferrer" style={{color:'#64748b',fontSize:'13px',fontWeight:'600',textDecoration:'none'}}>
          {label}
        </a>
      ))}
    </div>
  </div>
)

export default Footer
