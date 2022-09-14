import { Link } from "react-router-dom";
import "../style/footer.css";

export default function Footer(){
    return ( 
    <section className="contact-section bg-black vh-100" id="contact">
    <div className="container px-lg-5">
      <div className="contact-info">
      <h1><Link to="/" className="navbar-brand text-white">Apsgrade</Link></h1>
      </div>
        <div className="container text-white">
          <div className="row">
            <div className="col-lg-4">
            <Link to="/contact" className="nav-link">Contact us</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/how-to-use" className="nav-link">How to use Apsgrade</Link>
            <Link to="/disclaimer" className="nav-link">Disclaimer</Link>
            <Link to="/privacy-policy" className="nav-link">Privacy and policy</Link>
            <Link to="/terms-of-use" className="nav-link" >Terms of use</Link>
            </div>
            <div  className="col-lg-4">
              <p className="">email: <a href="mailto:apscore@apsgrade.co.za">apscore@apsgrade.co.za</a></p>
            </div>
          </div>
        </div>
    </div>
</section>
    )
}