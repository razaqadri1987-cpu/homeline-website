function App() {
  return (
    <div>
      <header style={{background:'#111',color:'#fff',padding:'20px',textAlign:'center'}}>
        <h1>Homeline Interior</h1>
        <p>Modern Interior Design Solutions</p>
      </header>

      <section style={{padding:'40px',textAlign:'center'}}>
        <h2>Welcome to Homeline Interior</h2>
        <p>
          We provide modular kitchen, wardrobe, PVC panel, false ceiling,
          wallpaper and complete home interior services.
        </p>
      </section>

      <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px',padding:'20px'}}>
        <div style={{border:'1px solid #ddd',padding:'20px',borderRadius:'10px'}}>
          <h3>Modular Kitchen</h3>
          <p>Premium modern kitchen designs.</p>
        </div>

        <div style={{border:'1px solid #ddd',padding:'20px',borderRadius:'10px'}}>
          <h3>Wardrobe Design</h3>
          <p>Custom wardrobe interiors.</p>
        </div>

        <div style={{border:'1px solid #ddd',padding:'20px',borderRadius:'10px'}}>
          <h3>False Ceiling</h3>
          <p>Luxury ceiling and lighting work.</p>
        </div>
      </section>

      <footer style={{background:'#111',color:'#fff',padding:'20px',textAlign:'center'}}>
        <p>© 2026 Homeline Interior Website</p>
      </footer>
    </div>
  )
}

export default App
