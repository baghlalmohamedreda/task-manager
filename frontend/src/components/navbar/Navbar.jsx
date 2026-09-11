import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        TaskManager
      </Link>

      <div className="navbar-links">

        <Link to="/login">
          Login
        </Link>

        <Link to="/register" className="navbar-button">
          Get Started
        </Link>

      </div>

    </nav>
  )
}

export default Navbar