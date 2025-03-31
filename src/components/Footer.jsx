import '../css/footer.css';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <a href="https://maps.app.goo.gl/2PskMuGKLztk9rJr7" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-map-marker-alt"></i>Sholinghur, Ranipet (Dt), Tamilnadu, India</p></a>
                            <a href="tel:+91-9655173063"><p><i className="fa fa-phone"></i>+91-9655173063</p></a>
                            <a href="mailto:rnrtrust@gmail.com"><p><i className="fa fa-envelope"></i>rnrtrust@gmail.com</p></a>
                            <div className="footer-social">
                                <a className="btn btn-custom" href="#"><i className="fab fa-x-twitter"></i></a>
                                <a className="btn btn-custom" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom" href="#"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-custom" href="#"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-custom" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/event">Popular Causes</a>
                            <a href="/event">Upcoming Events</a>
                            <a href="#">Latest Blog</a>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Useful Links</h2>
                            <a href="#">Terms of use</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Cookies</a>
                            <a href="#">Help</a>
                            <a href="#">FQAs</a>
                        </div>
                    </div> */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form name='NewsLetter'>
                                <input name='subscribe' className="form-control" placeholder="Email goes here" autoComplete='email' required/>
                                <button className="btn btn-custom">Submit</button>
                                <h6>Don't worry, we don't spam!</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-12 justify-content-center align-items-center d-flex">
                        {/* <p>We are a non-profit organization dedicated to making a difference in the world.</p><br />
                        <p>We are committed to transparency and accountability in all our operations.</p>
                        <br />
                        <p>We believe in the power of community and collaboration to create positive change.</p>
                        <br />
                        <p>We are passionate about our mission and work tirelessly to achieve our goals.</p>
                        <br />
                        <p>We value diversity and inclusivity in our organization and the communities we serve.</p>
                        <br />
                        <p>We strive to be innovative and adaptive in our approach to problem-solving.</p>
                        <br />
                        <p>We are committed to sustainability and protecting the environment for future generations.</p>
                        <br /> */}
                        <p>&copy; <a href="#">THE RNR ASSOCIATION NGO</a> | 2025, All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </ div>
    );
}