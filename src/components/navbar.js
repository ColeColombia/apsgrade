import "../style/navbar.css";

export default function NavBar(){
    return (
   <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container-fluid">
    <a className="navbar-brand" href="/">Apsgrade</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="#contact">contact</a>
      </div>
    </div>
  </div>
</nav>
    )
}