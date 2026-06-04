import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="vh-100 d-flex align-items-center bg-dark text-light">
      <div className="container ">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-2 fw-bold text-white" style={{ fontFamily: "cursive" }}>
             Sai SivaRama Krishna Koganti 
            </h1>

            <h3 className="text-warning fw-semibold">
              Java Full Stack Developer
            </h3>

            <p className="lead text-light-emphasis">
              React • Spring Boot • Java • MySQL • Python
            </p>

            <div className="mt-4">
              <a
                href="/Sai_resume(1).pdf"
                className="btn btn-warning btn-lg me-4 fw-bold"
              >
                Resume
              </a>

              <a
                href="#projects"
                className="btn btn-outline-light btn-lg"
              >
                Projects
              </a>
            </div>

            <div className="mt-4">
              <a
                href="https://github.com/sai07-koganti"
                target="_blank"
                rel="noreferrer"
                className="text-light me-4"
              >
                <FaGithub size={35} />
              </a>

              <a
                href="https://www.linkedin.com/in/sai-koganti-b79971290/"
                target="_blank"
                rel="noreferrer"
                className="text-info"
              >
                <FaLinkedin size={35} />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
             src={`${import.meta.env.BASE_URL}profilepic1.jpeg`}
              alt="Sai Koganti"
              className="img-fluid rounded-circle border border-4 border-warning shadow"
              style={{
                width: "400px",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;