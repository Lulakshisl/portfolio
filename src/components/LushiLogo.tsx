const LushiLogo = ({ size = 40 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#a855f7"/>
        <stop offset="50%"  stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#6366f1"/>
      </linearGradient>
      <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stopColor="#c084fc"/>
        <stop offset="100%" stopColor="#7c3aed"/>
      </linearGradient>
    </defs>

    {/* Left arrow/chevron shape */}
    <polygon
      points="10,50 35,20 50,35 32,50 50,65 35,80"
      fill="url(#grad1)"
      opacity="0.95"
    />

    {/* Right arrow/chevron shape */}
    <polygon
      points="90,50 65,20 50,35 68,50 50,65 65,80"
      fill="url(#grad2)"
      opacity="0.85"
    />

    {/* Center overlap highlight */}
    <polygon
      points="50,35 62,50 50,65 38,50"
      fill="url(#grad1)"
      opacity="0.5"
    />
  </svg>
)
export default LushiLogo



