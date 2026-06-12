const Home = () => {
  return (
    <div style={{backgroundColor:"#0a0a0f",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"80px"}}>
      
      <div>
        <h1 style={{color:"white",fontSize:"48px",fontWeight:"900"}}>
          Hi, I am <span style={{color:"#22d3ee"}}>Lulakshi</span>
        </h1>
        <h2 style={{color:"#22d3ee",fontSize:"20px",marginTop:"16px"}}>
          Software Engineering Student
        </h2>
        <p style={{color:"#9ca3af",marginTop:"16px",maxWidth:"400px"}}>
          Passionate about web development, UI/UX design and modern software.
        </p>
        <div style={{display:"flex",gap:"16px",marginTop:"32px"}}>
          <a href="mailto:test@gmail.com" style={{backgroundColor:"#22d3ee",color:"black",padding:"12px 24px",borderRadius:"8px",fontWeight:"700",textDecoration:"none"}}>
            Hire Me
          </a>
          <a href="/cv.pdf" style={{border:"2px solid #22d3ee",color:"#22d3ee",padding:"12px 24px",borderRadius:"8px",fontWeight:"700",textDecoration:"none"}}>
            Download CV
          </a>
        </div>
      </div>

      <div style={{width:"300px",height:"300px",borderRadius:"50%",border:"4px solid #22d3ee",overflow:"hidden"}}>
        <img src="/hero.png" alt="Lulakshi" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
      </div>

    </div>
  )
}

export default Home
