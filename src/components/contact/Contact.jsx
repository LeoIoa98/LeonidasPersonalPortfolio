import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {FiLinkedin} from 'react-icons/fi'
import {useRef, useState} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const [isSent, setIsSent] = useState(false); // New state for confirmation message

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_f4xtir3', 
        'template_luqncr1', 
        form.current, 
        'r3LPthy5WRDpTH6sh'
      );

      setIsSent(true); // Set the confirmation message
      e.target.reset();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>leonidas.ioannou.iee@gmail.com</h5>
            <a href="mailto:leonidas.ioannou.iee@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
          <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Leonidas Ioannou</h5>
            <a href="https://www.facebook.com/LeonidasIoa/"  target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
          <FiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Leonidas Ioannou</h5>
            <a href="https://www.linkedin.com/in/leonidas-ioannou-818886263/"  target="_blank">Send a Message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}

        {/* START FORM OPTIONS */}
      <div>
      {isSent ? (
        <p>Message sent successfully!</p>
        ) : (
        <form ref={form} on onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="2" placeholder='Your Message' required></textarea>
          <button type='submit' className = 'btn btn-primary'>Send Message</button>
        </form>
          )}
          </div>
      </div>
    </section>
  )
}

export default Contact