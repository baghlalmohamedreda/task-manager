import Navbar from "../components/navbar/Navbar"
import Hero from "../components/hero/Hero"
import Footer from "../components/footer/Footer"

import "./LandingPage.css"

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default LandingPage