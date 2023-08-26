import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/leonidas-ioannou-818886263/" target='_blank'><BsLinkedin/></a>
        <a href="https://www.instagram.com/leonidas.ioannou98/" target='_blank'><BsInstagram/></a>
        <a href="https://www.facebook.com/LeonidasIoa/" target='_blank'><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials