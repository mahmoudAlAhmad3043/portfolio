import React, { Component } from 'react'
import myImg from './../img/mahmoud.png';

class Photo extends Component {
  render() {
    return (
      <div className='flex border-4 rounded-xl border-sky-400 shadow-lg shadow-sky-400 opacity-75 hover:opacity-100 transition-all duration-700'>
        <img src={myImg} alt='not found' className='w-96 xl:w-80 rounded-lg '/>
      </div>
    )
  }
}

export default Photo