import React, { Component } from 'react'
import Icons from './Icons'

class Aboutme extends Component {
  render() {
    return (
      <div className='flex flex-col  text-zinc-50 text-start 2lg:text-center'>
        <h1 className='text-6xl vsm:text-3xl font-bold mb-10'>Mahmoud AL Ahmad</h1>
        <p className='text-3xl vsm:text-xl'>Computer Engineer & Web Developer</p>
        <div className='mt-10 pt-0.5 bg-sky-400 2lg:hidden'></div>
        <Icons/>
      </div>
    )
  }
}

export default Aboutme