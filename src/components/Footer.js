import React, { Component } from 'react'
import FooterTitle from './FooterTitle'
import FooterContains from './FooterContains'

class Footer extends Component {
  render() {
    return (
      <div id='Contact' className='py-8 mt-32 px-16 tn:px-2  grid grid-cols-3 md:grid-cols-1 bg-zinc-50'>
        <FooterTitle/>
        <FooterContains/>
      </div>
    )
  }
}

export default Footer