import React from 'react'
import facebookIcon from 'src/images/facebook.png'
import linkedinIcon from 'src/images/linkedin.png'
import githubIcon from 'src/images/github2.png'
import emailIcon  from 'src/images/email.png'
import downArowIcon from 'src/images/downArow.png'
import { useSelector } from "react-redux";

export default function Landing() {
  const lang = useSelector(state => state.language)
  return (
    <div className='landing-section d-flex  justify-content-between' id="/home">
        <div className='w-100 d-flex landing-glass-cover'>
          <div className='container w-100 d-flex mt-1 flex-column align-items-center justify-content-center'>
            <div className='personal-img-container  rounded-circle bg-no-repeat bg-cover bg-center'></div>
            <div className='color-blue-light text-center fw-semibold fs-2 mt-2'>
              <p className='mt-3'>{lang.landing_1}&emsp;<span className='sky-color text-decoration-underline'>{lang.landing_2}</span></p> 
              <p>{lang.landing_3}</p> 
            </div>

            <p className='landing-description text-center mt-1'>
              {lang.landing_4}
            </p>
            <div className='d-flex align-items-center gap-4 my-2 links'>
              <a href='https://www.facebook.com/mahmoud.alahmad.184881'>
                <img src={facebookIcon} alt='facebook'/>
              </a>
              <a href='https://www.linkedin.com/in/mahmoud-al-ahmad-a16085226/'>
                <img src={linkedinIcon} alt='linkedin'/>
              </a>
              <a href='https://github.com/mahmoudalahmad3043'>
                <img src={githubIcon} alt='github'/>
              </a>
              <a href='mailto:mahmoudahmad3043@gmail.com'>
                <img src={emailIcon} alt='email'/>
              </a>
            </div>

            <a href='#/about' className='down-arow my-2'>
              <img src={downArowIcon} alt='down'/>
            </a>
          </div>
        </div>
        </div>
  )
}
