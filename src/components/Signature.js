import React, { Component } from 'react'

class Signature extends Component {
  render() {
    return (
      <div className='text-start bg-gray-100 flex  flex-row sm:flex-col sm:items-start justify-between items-center py-4 px-16 tn:px-2'>
        <div className="tn:justify-self-center justify-self-start logo  font-mono text-3xl font-bold text-sky-400 ">
            myCv
            </div>
        <div>
            <div className='text-zinc-900 font-bold text-md inline pr-2'>Developed by:</div><p className='text-gray-900 inline'>Mahmoud AL-Ahmad</p>
        </div>
      </div>
    )
  }
}

export default Signature