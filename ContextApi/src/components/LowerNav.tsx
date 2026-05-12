import { useTheme } from "../context/ThemeContext"

const LowerNav = () => {
  const { theme } = useTheme()

  return (
    <div className="lower-nav">
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="status-indicator">
        <span>Current Theme:</span>
        <strong>{theme}</strong>
      </div>
    </div>
  )
}

export default LowerNav
