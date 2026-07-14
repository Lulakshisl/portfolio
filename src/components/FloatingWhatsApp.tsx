const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open('https://wa.me/94750184902', '_blank')
    
  }
  
  return (
    <>
      <div
        onClick={handleClick}
        className="wa-float"
        role="button"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '30px',
          zIndex: 999,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.67 4.785 1.84 6.77L2 30l7.43-1.802A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.4a11.33 11.33 0 0 1-5.78-1.583l-.414-.246-4.41 1.07 1.1-4.296-.27-.44A11.37 11.37 0 0 1 4.6 16.003c0-6.29 5.114-11.403 11.403-11.403S27.4 9.713 27.4 16.003 22.29 27.4 16.003 27.4zm6.27-8.536c-.344-.172-2.034-1.003-2.348-1.118-.314-.115-.543-.172-.772.172-.229.344-.886 1.118-1.086 1.347-.2.23-.4.258-.743.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.021-.53.15-.702.155-.154.344-.4.516-.601.172-.2.23-.344.344-.573.115-.229.058-.43-.029-.601-.086-.172-.772-1.862-1.057-2.549-.279-.668-.562-.578-.772-.589l-.657-.011c-.229 0-.6.086-.914.43-.314.343-1.2 1.174-1.2 2.863 0 1.69 1.229 3.322 1.4 3.551.172.229 2.42 3.694 5.863 5.18.82.354 1.46.565 1.958.723.823.261 1.572.224 2.164.136.66-.099 2.034-.832 2.32-1.635.287-.803.287-1.49.2-1.635-.084-.144-.313-.23-.657-.4z"/>
        </svg>
      </div>

      <style>{`
        .wa-float {
          animation: wa-pulse 2.5s ease-in-out infinite;
        }
        @keyframes wa-pulse {
          0%, 100% {
            box-shadow: 0 8px 24px rgba(139, 92, 246, 0.5);
          }
          50% {
            box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3),
                        0 0 0 10px rgba(167, 139, 250, 0.15);
          }
        }
        .wa-float:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }
      `}</style>
    </>
  )
}


export default FloatingWhatsApp

