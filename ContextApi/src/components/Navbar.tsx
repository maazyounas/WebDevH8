import { useTheme } from '../context/ThemeContext'
import LowerNav from './LowerNav'

const Navbar = () => {
  const { theme } = useTheme()

  return (
    <nav className="navbar">
      <div className="nav-header">
        <h2>Modern Context API</h2>
        <span className="theme-badge">{theme.toUpperCase()} MODE</span>
      </div>
      <LowerNav />
    </nav>
  )
}

export default Navbar
