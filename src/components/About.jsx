import React from "react";

function About() {
  return (
    <section id="about" className="py-5 bg-black text-light">
      <div className="container">

        <h2 className="heading-font text-center display-5 fw-bold text-warning mb-5">
          About Me
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-10">

            <div className="card bg-dark border border-warning shadow-lg">
              <div className="card-body p-5">

                <h3 className="text-info fw-bold mb-4">
                  Java Full Stack Developer
                </h3>

          <p className="fs-5 text-white">
            Hello! I'm <span className="text-warning fw-bold">Koganti Sai SivaRama Krishna</span>,
            a passionate and self-motivated Java Full Stack Developer with
            hands-on experience in building web applications using
            <span className="text-info"> Java, Spring Boot, React, MySQL, JDBC, and Hibernate</span>.
          </p>

          <p className="fs-5 text-white">
            I enjoy developing scalable backend systems, creating responsive
            user interfaces, and solving real-world problems through technology.
            I have worked on projects such as E-Commerce Applications,
            TextUtils app using React, Library Management Systems, and Car Rental Systems.
          </p>

          <p className="fs-5 text-white">
            Currently, I am expanding my knowledge in
            <span className="text-info"> AWS Cloud Computing and Ai Agents</span> and modern
            software development practices while continuously improving my
            problem-solving and programming skills.
          </p>

                <div className="alert alert-warning mt-4 mb-0">
                  <strong>🚀 Open to Opportunities:</strong> I am actively seeking
                  internships, entry-level software developer roles, and Java Full
                  Stack Developer opportunities where I can contribute, learn,
                  and grow as a software engineer.
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;