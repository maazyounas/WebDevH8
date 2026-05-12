import Button from './components/Button'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className="app-main">
      <div className="content-card">
        <Navbar />
        <section className="hero">
          <h1>Welcome to the Theme Switcher</h1>
          <p>Experience seamless state management with React Context API.</p>
        </section>
        <Button />
      </div>
    </main>
  )
}

export default App
