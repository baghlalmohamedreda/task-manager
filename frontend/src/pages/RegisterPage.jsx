import { Link } from "react-router-dom"
import "./Auth.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../services/authService"
function RegisterPage() {
  const  navigate=useNavigate()
  const [error,setError]=useState("")
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:""
  })
  function handleChange(e){
    setError("")
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  async function handleSubmit(e){
    e.preventDefault()
    try{
      if(!formData.name||!formData.email || !formData.password){
        setError("il faut remplir tout les champs")
        return
      }
      const data=await registerUser(formData)
      navigate("/login")
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

        <h1>Create your account</h1>

        <p className="auth-subtitle">
          Start organizing your tasks today.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">

          <div className="form-group">
            <label>Name</label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Create a password"
            />
          </div>
          {error && <span style={{color:'red'}}>{error}</span>}

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