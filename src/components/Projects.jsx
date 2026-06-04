import React from "react";

function Projects() {
  const projects = [
    {
      title: "ShopEZ",
      tech: "React + Spring Boot + MySQL"
    },
    {
      title: "TextUtils App",
      tech: "React + JavaScript"
    },
    {
      title: "Car Rental System",
      tech: "Java + JDBC"
    },
    {
      title: "Predicting CHD using Voting Classifier",
      tech: "Machine Learning + Python"
    }
  ];

  return (
    <section id="projects" className="py-5 bg-black text-light">
      <div className="container">
        <h2 className="heading-font text-center display-5 fw-bold text-warning mb-5">
          Projects
        </h2>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div className="card bg-dark border-secondary h-100 shadow-lg">
                <div className="card-body">
                  <h3 className="text-info">
                    {project.title}
                  </h3>

                  <p className="text-light">
                    {project.tech}
                  </p>

              <a href="https://github.com/sai07-koganti" className="btn btn-warning btn-lg me-3 fw-bold">
                Github
              </a>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;