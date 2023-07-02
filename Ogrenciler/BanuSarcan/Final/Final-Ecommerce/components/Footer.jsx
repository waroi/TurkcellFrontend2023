import React from 'react'; 

import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'; 

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>Technology Store | 2023 |  All Rights Reserved</p>
        <p className='icons'> 
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
        </p>
    </div>
  )
}

export default Footer;