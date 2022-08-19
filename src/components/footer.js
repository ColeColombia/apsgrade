import "../style/footer.css";

export default function Footer(){
    return ( 
    <section className="contact-section bg-black vh-100" id="contact">
    <div className="container px-lg-5">
      <div className="contact-info">
        <h3 className="text-center text-white display-4">Contact Information</h3>
        <ol className="text-white">
          <li className="email"><a href="mailto:apscore@apsgrade.co.za">Email: apscore@apsgrade.co.za</a></li>
        </ol>
      </div>
        <div className="social d-flex justify-content-center">
            <a className="mx-2" href="https://za.linkedin.com/in/kholani-benelzane-66ab711a8"><i className="bi bi-linkedin"></i></a>
            <a className="mx-2" href="https://www.facebook.com/profile.php?id=100074140736669"><i className="bi bi-facebook"></i></a>
            <a className="mx-2" href="https://github.com/ColeColombia"><i className="bi bi-github"></i></a>
        </div>
    </div>
</section>
    )
}