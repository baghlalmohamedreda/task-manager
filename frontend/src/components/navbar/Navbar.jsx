import { Link } from "react-router-dom"

function Navbar() {

  return (
    <nav>

      <Link to="/">
        Task Manager
      </Link>

      <div>

        <Link to="/">
          Accueil
        </Link>

        <Link to="/login">
          Connexion
        </Link>

        <Link to="/register">
          S'inscrire
        </Link>

      </div>

    </nav>
  )
}

export default Navbar