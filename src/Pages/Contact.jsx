import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="section section-bg" id="call-to-action" style={{ backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cta-content">
                                <br />
                                <br />
                                <h2>Feel free to <em>Contact Us</em></h2>
                                <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ***** Features Item Start ***** --> */}
            <section className="section" id="features">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>contact <em> info</em></h2>
                                <img src="assets/images/line-dec.png" alt="waves" />

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                            </div>

                            <h5><a href="#">+1 333 4040 5566</a></h5>

                            <br />
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>

                            <h5><a href="#">contact@company.com</a></h5>

                            <br />
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>

                            <h5>212 Barrington Court New York</h5>

                            <br />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Features Item End ***** --> */}

            {/* <!-- ***** Contact Us Area Starts ***** --> */}
            <section className="section" id="contact-us" style={{ marginTop: "0" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <div id="map">
                                <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="600px" frameBorder="0" style={{ border: "0" }} allowFullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <div className="contact-form section-bg" style={{ backgroundImage: "url(assets/images/contact-1-720x480.jpg)" }}>
                                <form id="contact" action="" method="post">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <fieldset>
                                                <input name="name" type="text" id="name" placeholder="Your Name*" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <fieldset>
                                                <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email*" required="" />
                                            </fieldset>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <fieldset>
                                                <input name="subject" type="text" id="subject" placeholder="Subject" />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="main-button">Send Message</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Contact Us Area Ends ***** --> */}

        </>
    )
}

export default Contact