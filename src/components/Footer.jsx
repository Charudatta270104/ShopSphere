import React from "react";

const Footer = () => {
  return (
    <>
      <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4 brandname">ShopSphere</h4>
                        <a class="btn btn-link" href="">About Us</a>
                        <a class="btn btn-link" href="">Contact Us</a>
                        <a class="btn btn-link" href="">Privacy Policy</a>
                        <a class="btn btn-link" href="">Terms & Condition</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Kotharud, Pune, Maharastra</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 12345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>abc@gmail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href="https://twitter.com/i/flow/login"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Shop Time</h4>
                        <h5 class="text-light fw-normal">Monday - Saturday</h5>
                        <p>09:00AM - 09:00PM</p>
                        <h5 class="text-light fw-normal">Sunday</h5>
                        <p>10A:00M - 08:00PM</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, qui!.</p>
                        <div class="position-relative mx-auto" >
                            <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="">ShopSphere</a>, All Right Reserved.
                            Designed By <a class="border-bottom" href="https://charudattawarke.in/">Charudatta Warke</a>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    </>
  );
};

export default Footer;
