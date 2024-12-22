import React from "react";

const Contact = () => {
  return (
    <>
      <div className="mainContact">
        <div className="row m-auto">
          <div className="col-12">
          </div>
          <div className="col-12">
            <div className="row">
              <h3 className="contact-title padd-15 mt-3">Have You Any Question ?</h3>
              <h3 className="contact-title padd-15"><span >SEND ME AN EMAIL</span></h3>
              {/* <!--======Contact Form======--> */}
              <form action="" method="GET">
                <div className="row">
                  <div className="contact-form padd-15">
                    <div className="row">
                      <div className="form-item col-6 padd-15">

                        <div className="form-group">
                          <input type="text" name="Name" className="form-control" placeholder="Name" />
                        </div>
                      </div>
                      <div className="form-item col-6 padd-15">
                        <div className="form-group">
                          <input type="email" id="email" name="email" className="form-control" placeholder="Email" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12 padd-15">
                        <div className="form-group">
                          <input type="text" name="subject" className="form-control" placeholder="Subject" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12 padd-15">
                        <div className="form-group">
                          <textarea className="form-control" name="message" placeholder="MESSAGE"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12 padd-15">
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;