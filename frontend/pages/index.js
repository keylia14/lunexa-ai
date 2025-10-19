export default function Home() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg,#4c1d95,#6d28d9)',
      color: 'white',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <h1>✨ Lunexa AI Backend Connected</h1>
      <p>The project is live on Vercel + Supabase.</p>
      <a href="/api/hello" style={{color:'#c084fc',marginTop:'1rem'}}>
        Test API endpoint
      </a>
    </div>
  );
}