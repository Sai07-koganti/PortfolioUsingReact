import React from "react";

function Skills() {
  const skills = [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "React", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "Hibernate", level: 75 },
    { name: "JDBC", level: 85 },
    { name: "AWS", level: 60 },
    { name: "Python", level: 70 }
  ];

  return (
    <section id="skills" className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center display-5 fw-bold text-warning mb-5">
          Skills
        </h2>

        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card bg-black border border-warning shadow">
                <div className="card-body">

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="text-white fw-bold mb-0">
                      {skill.name}
                    </h5>

                    <span className="badge bg-warning text-dark fs-6">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="progress" style={{ height: "15px" }}>
                    <div
                      className="progress-bar bg-warning text-dark fw-bold"
                      style={{ width: `${skill.level}%` }}
                    >
                      {skill.level}%
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;