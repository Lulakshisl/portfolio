import { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const items = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <nav style={{position:'fixed',top:0,width:'100%',zIndex:50,padding:'16px 48px',display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'rgba(10,10,15,0.9)',backdropFilter:'blur(10px)'}}>
      <span style={{color:'white',fontWeight:900,fontSize:'22px'}}>
        Port<span style={{color:'#22d3ee'}}>folio</span>
      </span>
      <div style={{display:'flex',gap:'32px'}}>
        {items.map(item => (
          <a key={item} href={'#'+item.toLowerCase()} onClick={()=>setActive(item)}
            style={{color:active===item?'#22d3ee':'#d1d5db',textDecoration:'none',fontWeight:600,fontSize:'14px',borderBottom:active===item?'2px solid #22d3ee':'2px solid transparent',paddingBottom:'4px'}}>
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
