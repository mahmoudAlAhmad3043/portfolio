import React, { Component } from 'react'
import WorkTitle from './WorkTitle'
import WorksContains from './WorksContains'

class Works extends Component {
  render() {
    return (
      <div id="Work" className='pt-32 px-16 tn:px-2 grid grid-cols-3 md:grid-cols-1'>
        <WorkTitle/>
        <WorksContains/>
      </div>
    )
  }
}

export default Works