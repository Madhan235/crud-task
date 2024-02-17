import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="social-links">
        <a href="#"  > <FaFacebookF/> </a>
        <a href="#"  > <FaInstagram/> </a>
        <a href="#"  > <FaLinkedinIn/></a>
        <a href="#" ><FaTwitter/> </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer