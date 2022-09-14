import "../style/navbar.css";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
   <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container-fluid">
    <Link to="/" className="navbar-brand">Apsgrade</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/contact" className="nav-link">Contact us</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/how-to-use" className="nav-link">How to use Apsgrade</Link>
        <Link to="/disclaimer" className="nav-link">Disclaimer</Link>
        <Link to="/privacy-policy" className="nav-link">Privacy and policy</Link>
        <Link to="/terms-of-use" className="nav-link" >Terms of use</Link>
      </div>
    </div>
  </div>
</nav>
    )
}
