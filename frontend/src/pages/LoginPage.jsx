import { Link } from "react-router-dom"
import "./Auth.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { loginUser } from "../services/authService"
function LoginPage() {
  const navigate=useNavigate()
  const [formData,setFormDats]=useState({
    email:"",
    password:""
  })
  function handleChange(e){
    setFormDats({
      ...formData,
      [e.target.name]:e.target.value
    })


  }
  async function handleSubmit(e){
    e.preventDefault()
    try{
      const data=await loginUser(formData)
      localStorage.setItem("token",data.token)
      navigate("/home")

    }catch(error){
      console.log(error.message)
    }
  }

  
  
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

        <form onSubmit={handleSubmit} className="auth-form">

          <div className="form-group">
            <label>Email</label>
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              value={formData.password}
              onChange={handleChange}
              name="password"
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