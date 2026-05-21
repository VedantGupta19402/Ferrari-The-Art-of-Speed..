import React from 'react'
import Top from './Top'
import Bottom from './Bottom'
import Navbar from './FlowingMenu'

const Video = () => {
  return (
    <div className='bg-cover h-screen w-screen relative'>
      <video autoPlay loop muted src='/video.mp4'></video>
      <div>
      <Navbar/>
        <Top/>
        <Bottom/>
      
      </div>
    </div>
  )
}

export default Video
