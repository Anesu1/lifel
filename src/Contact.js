import React from "react";
import ImageBg from "./styled/ImageBg";
import { Link, animateScroll as scroll } from "react-scroll";


function Contact() {
  return (
    <ImageBg>
      <p>
        Did you find what you are looking for? If not, please get in touch with
        us
      </p>
      <button>
      <Link
           activeClass="active"
           to="contact"
           spy={true}
           smooth={true}
           duration={500}
          >Contact Us</Link></button>
    </ImageBg>
  );
}

export default Contact;
