import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {BsHeartPulseFill} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>    
        <div className='about__content'>
          
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 Months Working</small>
            </article>

            <article className='about__card'>
              <BsHeartPulseFill className='about__icon'/>
              <h5>Occupations</h5>
              <small>Cryptos - NFT's - Dropshipping</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Information & Electronic Systems Projects</h5>
              <small>5+ Completed</small>
            </article>

          </div>

          <p align="justify">
          I was born in 1998 and I live in Larnaca, Cyprus. I am holding a BSc in Information and Electronic Systems Engineering from the Department of International University of Thessaloniki. I'm currently working as a Junior Full Stack Java Developer. My hobbies are dealing with web development and designing and implementing electronic circuits (digital and analog), as well as dealing with embedded systems and learning about the Internet of Things (IoT) and Artificial Intelligence (Machine Learning, Neural Networks), which is an area I am interested in pursuing professionally.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About