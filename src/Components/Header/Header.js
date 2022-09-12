import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='flex bg-[#B4161B] '>
        <div className='flex flex-row justify-center items-center'>
            <div className='text-2xl text-white mx-auto p-5'>
                <h1>Video Searching From Youtube</h1>
            </div>
        </div>
      </div>
    )
  }
}
