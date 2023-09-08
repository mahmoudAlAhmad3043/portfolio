import React, { Component } from 'react'

class ContainIntro extends Component {
  render() {
    function getOld(){
        let year = new Date().getFullYear();
        let old = year - 2000;
        return old;
    }
    return (
      <div className='col-span-2'>
        <p className='text-gray-300 text-start'>
        I am Mahmoud Al-Ahmad, {getOld()} years old.
        I live in Syria, Aleppo, I studied computer engineering at Aleppo University and graduated in 2023.
        I currently work in the field of web development and I love this field very much, and I always strive to learn everything new.
        </p>
      </div>
    )
  }
}

export default ContainIntro