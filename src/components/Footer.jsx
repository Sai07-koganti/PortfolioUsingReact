import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-light py-4 border-top border-secondary">
      <div className="container text-center">

        <h5 className="text-warning fw-bold">
          Sai Koganti
        </h5>

        <p className="mb-1">
          Java Full Stack Developer
        </p>

        <p className="text-secondary">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

      </div>
    </footer>
  );
}

export default Footer;