import React, { useState } from 'react'
import aboutMeImg from 'src/images/development-about.jpg'
import { useIsMobile } from 'src/utils/index'

export default function AboutMe() {
    const screenFalg = useIsMobile(768)
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = "/files/Mahmoud-CV.pdf";
        link.download = 'Mahmoud-Alahmad-CV';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className='about-bg-img' id="/about">
            <div className='container w-100 d-flex flex-column align-items-center py-2'>
                <div className={(screenFalg ? 'flex-column' : 'flex-row') + ' d-flex my-1 cards-container'}>
                    <img src={aboutMeImg} className={screenFalg ? 'about-me-img-mobile' : 'about-me-img-pc'} alt='about image'/>
                    <div className='p-3'>
                        <div className='about-title fs-3'>ABOUT ME</div>
                        <div className='blue-title fs-5 mt-3'>Hello! I'm Mahmoud Alahmad</div>
                        <p className='p-about-card mt-3'>
                            I'm a passionate Software Engineer focused on building innovative, scalable web solutions. With expertise in React, TypeScript, and Node.js, I create applications that balance performance, functionality, and user experience. I'm also passionate about AI and machine learning, constantly exploring new technologies and best practices to build clean, maintainable software.
                        </p>
                        <div className='blue-title fs-5 mt-3'>Education & Background</div>
                        <ul className='education-list p-0'>
                            <li>
                                <div className='date'>2023 - Present</div>
                                <div className='title'>Front End Development Experience</div>
                                <div className='desc'>Dubai</div>
                            </li>
                            <li>
                                <div className='date'>2022</div>
                                <div className='title'>Supervised Machine Learning Certificate - Regression and Classification</div>
                                <div className='desc'>Stanford Online</div>
                            </li>
                            <li>
                                <div className='date'>2019 - 2023</div>
                                <div className='title'>Bachelor's in Computer Engineering</div>
                                <div className='desc'>University of Aleppo, Syria</div>
                            </li>
                        </ul>
                        <button onClick={() => downloadCV()} className='mt-2 download-cv-btn'>Download C.V</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
