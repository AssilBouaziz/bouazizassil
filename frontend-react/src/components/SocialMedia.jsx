import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
      <a href="https://www.linkedin.com/in/assil-bouaziz/" target="_blank">
        <BsLinkedin />
        </a>
      </div>
      <div>
      <a href="https://www.facebook.com/assil.fcb.1899/" target="_blank">
        <FaFacebook />
        </a>
      </div>
      <div>
      <a href="https://www.instagram.com/assilbouaziz/" target="_blank">
        <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
