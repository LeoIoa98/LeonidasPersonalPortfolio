import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>TEACHING</h3>
            </div> 
            
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>I can teach you the basics of HTML - CSS - JAVASCRIPT (BSc Level)</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>I can teach you linux bash basics</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>I can teach you Analog & Digital electronics Very Well</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>I can teach you ESP32 & Arduino programming</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>I can teach you SQL</p>
              </li>

            </ul>

        </article>
        {/* END OF TEACHING */}

        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
            </div> 
            
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>I can create for you a simple Front End Website/Portfolio</p>
              </li>
            </ul>

        </article>
        {/* WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>ELECTRONIC ENGINEERING</h3>
            </div> 
            
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>I can design Electronic boards for you</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>I can programming you Arduino/Esp32 to do whatever you want</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>I can solve your Electronic circuits problems</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>I can Help with or creating for you IoT projects</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>I can help you with your Information or Electronic Engineer Thesis/Final project</p>
              </li>
            </ul>

        </article>
        {/* END OF ELECTRONIC ENGINEERING*/}
      </div> 
    </section>
  )
}

export default Services