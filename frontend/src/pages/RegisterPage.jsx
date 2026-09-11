import { Link } from "react-router-dom"
import "./Auth.css"

function RegisterPage() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <Link to="/" className="auth-logo">
          TaskManager
        </Link>

        <h1>Create your account</h1>

        <p className="auth-subtitle">
          Start organizing your tasks today.
        </p>

        <form className="auth-form">

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Create Account
          </button>

        </form>

        <p className="auth-footer-text">
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}

export default RegisterPage