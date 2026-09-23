import emailIcon from 'src/images/contact-email.png'
import callIcon from 'src/images/contact-telephone.png'
import locationIcon from 'src/images/contact-location.png'
import { useState } from 'react'
import {sendEmail} from 'src/utils/index.js'

export default function Contact() {
  const [object, setObject] = useState({
    name:'',
    email: '',
    subject: '',
    message: ''
  })

  const handleMessage = (event) => {
    setObject((prevMessage) => ({...prevMessage,[event.target.name]:event.target.value}))
  }

  const submitMessage = (event) => {
    event.preventDefault();
    sendEmail(event.target);
    setObject((prevMessage) => ({...prevMessage,
    name:'',
    email: '',
    subject: '',
    message: ''}))
  }
  let arr = [
    {
      icon: emailIcon,
      title: 'Email',
      description:'mahmoudahmad3043@gmail.com',
      text: 'Best for project enquiries'
    },
    {
      icon: callIcon,
      title: 'Calendar',
      description:'+971 528 400 579',
      text: '30-min intro call'
    },
    {
      icon: locationIcon,
      title: 'Location',
      description:'UAE, Dubai',
      text: 'Al barsha heights'
    }
  ]
  return (
    <div className="bg-contact" id="/contact">
      <div className="bg-contact-grid">
      <div className="container w-100 d-flex flex-column align-items-center py-2">
        <div className="skills-title fs-3">Contanct Me</div>
        <p className="skills-p my-3 text-center">I'm selectively open to senior engineering roles, technical advisory engagements, and interesting open source collaborations.</p>
        <div className="d-flex mt-4 w-100 flex-wrap justify-content-center column-gap-4">
          <div className="contact-section1 contact-card">
            {
              arr.map((item,index) => (
                <div key={index} className='contact-item mb-3 p-3 d-flex flex-wrap gap-3 align-items-start rounded-4'>
                  <div className='contact-img rounded-2 p-2'>
                    <img src={item.icon} alt='icon'/>
                  </div>
                  <div>
                    <div className='title'>{ item.title }</div>
                    <p className='m-0 description'>{ item.description }</p>
                    <p className='m-0 text'>{ item.text }</p>
                  </div>
                </div>
              ))
            }
            <div></div>
          </div>
          <form onSubmit={(e) => submitMessage(e)} className="contact-form mb-3 p-3 contact-card rounded-4">
            <div className='input-container d-flex flex-column'>
              <label className=''>NAME</label>
              <input placeholder='Ali Ahmad' className='rounded-3 p-2' type='text' name='name' value={object.name} onChange={(e) => handleMessage(e)}/>
            </div>

            <div className='input-container d-flex flex-column'>
              <label>EMAIL</label>
              <input placeholder='ali@gmail.com' className='rounded-3 p-2' type='email' name='email' value={object.email} onChange={(e) => handleMessage(e)}/>
            </div>

            <div className='input-container d-flex flex-column'>
              <label className=''>SUBJECT</label>
              <input placeholder='Enter your subject' className='rounded-3 p-2' type='text' name='subject' value={object.subject} onChange={(e) => handleMessage(e)}/>
            </div>

            <div className='input-container d-flex flex-column'>
              <label>MESSAGE</label>
              <textarea placeholder='Enter your message' className='rounded-3 p-2' type='text' name='message' value={object.message} onChange={(e) => handleMessage(e)}/>
            </div>

            <button type='submit' className='send-message-btn rounded-3 p-2 w-100'>Send Message</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}
