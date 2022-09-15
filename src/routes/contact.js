import { useState } from "react"

export default function Contact(){

    const [status, setStatus] = useState(false);

    function handleSubmit(){
        setStatus(true);
    }

    return (
        <div className="container mt-5 py-5">
                            <p className="d-inline-block display-3 text-dark">Contact Us</p>
                            <h1 className="display-6 text-uppercase text-dark mb-4">Have Any Query? Please Contact Us!</h1>
                            <form action="https://apsgrade.co.za/mail/mail.php" method="POST" onSubmit={()=>handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-lg-4">
                                        <div className="form-floating">
                                            <input type="text" name="firstName" className="form-control bg-transparent text-dark border border-dark" id="name" placeholder="Your Name" required/>
                                            <label htmlFor="name">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-floating">
                                            <input type="text" name="lastName" className="form-control bg-transparent border border-dark" id="lastName" placeholder="Your Email" required/>
                                            <label htmlFor="lastName">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="form-floating">
                                            <input type="email" name="email" className="form-control bg-transparent border border-dark" id="email" placeholder="Subject" required/>
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="form-floating">
                                            <input type="text" name="subject" className="form-control bg-transparent border border-dark" id="subject" placeholder="Subject" required/>
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="form-floating">
                                            <textarea className="form-control bg-transparent border border-dark" name="message" placeholder="Leave a message here" id="message" style={{height: "100px"}} required></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    {status ? <div className="status col-lg-8 text-center">Sending message...</div> : ""}
                                    <div className="col-lg-8">
                                        <button className="btn w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
    )
}