import React, { Component } from 'react'
import Photo from './Photo'
import Aboutme from './Aboutme'

class Home extends Component {
  render() {
    return (
      <div id="Home" className='pt-48 px-16 tn:px-2 flex flex-row justify-between gap-y-12 gap-x-6 flex-wrap 2lg:justify-center'>
        <Aboutme />
        <Photo />
      </div>
    )
  }
}

export default Home