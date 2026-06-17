const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/94750184902"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-float"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 999,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#8b5cf6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px #a78bfa',
        textDecoration: 'none'
      }}
    >
      <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.149.347-.347.521-.521.174-.174.247-.297.371-.495.124-.198.062-.371-.025-.52-.087-.149-.748-1.81-.999-2.443-.196-.504-.401-.466-.557-.467-.166-.001-.345-.002-.529-.002-.184 0-.5.067-.747.347-.247.279-.943.92-1.025 2.198-.082 1.278.62 2.564.747 2.747.124.176.166.227.297.396.124.155 1.292 1.94 2.93 2.71 1.62.762 1.92.62 2.32.578.397-.04 1.29-.527 1.473-1.038.184-.51.184-.948.13-1.038-.05-.087-.247-.149-.521-.297M12.05 2C6.5 2 2 6.477 2 11.99c0 2.122.667 4.099 1.84 5.71L2.65 21.5l3.91-1.275A9.973 9.973 0 0 0 12.05 22c5.55 0 10.05-4.477 10.05-9.99C22.1 6.477 17.6 2 12.05 2z"/>
      </svg>

      <style>{`
        .wa-float {
          animation: wa-pulse 2.5s ease-in-out infinite;
        }
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 8px 24px #a78bfa; }
          50% { box-shadow: 0 8px 24px #a78bfa7a, 0 0 0 10px #ac97e9e3; }
        }
      `}</style>
    </a>
  )
}

export default FloatingWhatsApp

