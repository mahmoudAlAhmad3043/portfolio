import React, { Component } from 'react'
import Intro from './Intro'
import ContainIntro from './ContainIntro'
import Skills from './Skills'

class About extends Component {
  render() {
    return (
      <div id='About' className='pt-32 px-16 tn:px-2 grid grid-cols-3 grid-rows-2 md:flex md:flex-col md:gap-y-8'>
        <Intro/>
        <ContainIntro/>
        <Skills/>
      </div>
    )
  }
}

export default About