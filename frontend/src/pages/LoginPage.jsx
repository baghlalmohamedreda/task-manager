import { Link } from "react-router-dom"
import "./Auth.css"

function LoginPage() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <Link to="/" className="auth-logo">
          TaskManager
        </Link>

        <h1>Welcome back</h1>

        <p className="auth-subtitle">
          Login to continue managing your tasks.
        </p>

        <form className="auth-form">

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
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Login
          </button>

        </form>

        <p className="auth-footer-text">
          Don't have an account?
          <Link to="/register">
            Create account
          </Link>
        </p>

      </div>

    </div>
  )
}

export default LoginPage