import React, { Component } from 'react'

class Skills extends Component {
  render() {
    return (
      <div className='sm:mt-8 flex flex-col gap-y-5 row-start-2 col-start-2 col-end-4  text-start text-zinc-50'>
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <p>HTML5</p>
                <p>96%</p>
            </div>
            <div className='mt-2 rounded-md  bg-gray-200'>
              <div className='rounded-md bg-sky-600 py-1 skill1'></div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <p>Java Script</p>
                <p>71%</p>
            </div>
            <div className='mt-2 rounded-md  bg-gray-200'>
              <div className='rounded-md bg-sky-600 py-1 skill2'></div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <p>Node Js</p>
                <p>52%</p>
            </div>
            <div className='mt-2 rounded-md  bg-gray-200'>
              <div className='rounded-md bg-sky-600 py-1 skill3'></div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <p>React Js</p>
                <p>31%</p>
            </div>
            <div className='mt-2 rounded-md bg-gray-200'>
              <div className='rounded-md bg-sky-600 py-1 skill4'></div>
            </div>
        </div>
      </div>
    )
  }
}

export default Skills