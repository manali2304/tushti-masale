export default function PaymentSuccess() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#e8d5a3',
      fontFamily: 'Cormorant Garamond, serif',
      textAlign: 'center',
      gap: '1rem',
      padding: '2rem'
    }}>
      <div style={{ fontSize: '4rem' }}>🎉</div>
      <h1 style={{ 
        fontSize: '3rem', 
        color: '#3d1f0a',
        fontFamily: 'Cormorant Garamond, serif',
        fontWeight: '700'
      }}>
        Order Placed!
      </h1>
      <p style={{ 
        color: '#7a5c42', 
        fontSize: '1.1rem',
        lineHeight: '1.8',
        maxWidth: '400px',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: '300'
      }}>
        Thank you for choosing Tushti Masale.<br/>
        We will contact you shortly with delivery details.
      </p>
      <a href="/" style={{
        marginTop: '1rem',
        background: '#3d1f0a',
        color: '#e8d5a3',
        padding: '1rem 2.5rem',
        borderRadius: '2px',
        textDecoration: 'none',
        fontSize: '0.75rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        fontFamily: 'DM Sans, sans-serif',
        transition: 'background 0.3s'
      }}>
        Back to Home
      </a>
    </div>
  )
}