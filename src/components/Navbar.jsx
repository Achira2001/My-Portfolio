import React from 'react';

import logo from "../assets/a1.png";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-10"
          src={logo}
          alt="logo"
        />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        <a
          href="https://www.linkedin.com/in/achira-amarasena-911092252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Achira2001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        {/* <a
          href="https://www.instagram.com/your-username/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://x.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a> */}

      </div>
    </nav>
  );
};

export default Navbar;