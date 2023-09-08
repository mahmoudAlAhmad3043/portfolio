import React, { Component } from 'react'
import Experience1 from './Experience1'
import Experience2 from './Experience2'
import Experience3 from './Experience3'

class ExperienceContains extends Component {
  render() {
    return (
      <div className='col-span-2 grid grid-cols-3 lg:grid-cols-1 md:pt-8'>
        <Experience1/>
        <Experience2/>
        <Experience3/>
      </div>
    )
  }
}

export default ExperienceContains