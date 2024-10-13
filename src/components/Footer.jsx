import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-xl font-bold">HemmaKväll</p>

        <a
          className="hover:text-blue-500 text-sm"
          aria-label="Visit Martin's LinkedIn"
          href="https://www.linkedin.com/in/martin-wallberg-049a62308/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
