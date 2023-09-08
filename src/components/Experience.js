import React, { Component } from 'react'
import ExperienceTitle from './ExperienceTitle'
import ExperienceContains from './ExperienceContains'

class Experience extends Component {
  render() {
    return (
      <div id="Experience" className='pt-32 px-16 tn:px-2 grid grid-cols-3 md:grid-cols-1'>
        <ExperienceTitle/>
        <ExperienceContains/>
      </div>
    )
  }
}

export default Experience