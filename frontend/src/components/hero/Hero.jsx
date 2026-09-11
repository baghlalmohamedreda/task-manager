import { Link } from "react-router-dom"
import "./Hero.css"

function Hero() {
  return (
    <main className="hero">

      <div className="hero-content">

        <h1>
          Organize your tasks
          <span> effortlessly.</span>
        </h1>

        <p>
          Stay organized, manage your daily tasks
          and focus on what really matters.
        </p>

        <div className="hero-buttons">

          <Link to="/register" className="primary-button">
            Get Started
          </Link>

          <Link to="/login" className="secondary-button">
            Login
          </Link>

        </div>

      </div>

    </main>
  )
}

export default Hero