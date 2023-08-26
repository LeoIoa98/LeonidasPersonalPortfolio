import React from 'react'
import './footer.css'
import {FiLinkedin} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Leonidas Ioannou</a>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/LeonidasIoa/"><BsFacebook /></a>
        <a href="https://www.instagram.com/leonidas.ioannou98/"><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/leonidas-ioannou-818886263/"><FiLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Leonidas Ioannou. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer