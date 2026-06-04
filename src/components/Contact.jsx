import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-black text-light">
      <div className="container">

        <h2 className="text-center display-5 fw-bold text-warning mb-5">
          Contact Me
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="card bg-dark border border-warning shadow-lg">
              <div className="card-body p-4">

                <h4 className="text-center text-info mb-4">
                  Let's Connect
                </h4>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-light text-dark border-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control bg-light text-dark border-primary"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    rows="5"
                    className="form-control bg-light text-dark border-primary"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button className="btn btn-warning btn-lg w-100 fw-bold">
                  Send Message
                </button>

                <hr className="border-secondary my-4" />

                <div className="text-center">

                  <a
                    href="mailto:sai.koganti07@gmail.com"
                    className="btn btn-outline-warning me-2"
                  >
                    <FaEnvelope />
                  </a>

                  <a
                    href="https://github.com/sai07-koganti"
                    className="btn btn-outline-light me-2"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sai-koganti-b79971290/"
                    className="btn btn-outline-info"
                  >
                    <FaLinkedin />
                  </a>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;