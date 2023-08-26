import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {TbBrandPython} from 'react-icons/tb'
import {BiLogoPostgresql} from 'react-icons/bi'
import {SiOracle} from 'react-icons/si'
import {BiSolidReport} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have As A Junior Full Stack Java Developer</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <AiOutlineHtml5 className='experience__details-icon' />
           <div>
            <h4>HTML</h4>
            <small className='text_light'>Good</small>
           </div>
          </article>

          <article className='experience__details'>
            <TbBrandCss3 className='experience__details-icon' />
           <div>
            <h4>CSS</h4>
            <small className='text_light'>Good</small>
           </div>
          </article>

          <article className='experience__details'>
            <TbBrandJavascript className='experience__details-icon' />
           <div>
            <h4>JavaScript</h4>
            <small className='text_light'>Good</small>
           </div>
          </article>

          <article className='experience__details'>
            <FaReact className='experience__details-icon' />
            <div>
             <h4>React</h4>
             <small className='text_light'>Basics</small>
            </div>
          </article>

        </div>
      </div>  

    {/* END OF FRONTEND */}


    <div className="experience__backend">
    <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <FaJava className='experience__details-icon' />
            <div>
             <h4>Java</h4>
             <small className='text_light'>Very Good</small>
            </div>
          </article>

          <article className='experience__details'>
            <TbBrandPython className='experience__details-icon' />
            <div>
             <h4>Python</h4>
             <small className='text_light'>Good</small>
            </div>
          </article>

          <article className='experience__details'>
            <BiLogoPostgresql className='experience__details-icon' />
            <div>
             <h4>PostgreSQL</h4>
             <small className='text_light'>Very Good</small>
            </div>
          </article>

          <article className='experience__details'>
            <BiSolidReport className='experience__details-icon' />
            <div>
             <h4>Jasper Reports</h4>
             <small className='text_light'>Very Good</small>
            </div>
          </article>
          
          <article className='experience__details'>
            <SiOracle className='experience__details-icon' />
            <div>
             <h4>SQL Developer</h4>
             <small className='text_light'>Very Good</small>
            </div>
          </article>
        </div>
    </div>
    </div>
    <a href='#'> For More About My Skills And My Experience Click On Here To Download My CV</a>
    </section>
    
  )
}

export default Experience 