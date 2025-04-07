import React from 'react'
import './Video.css'
import Playvideo from '../../components/playvideo/Playvideo'
import Recommended from '../../components/Recommended/Recommended'
const Video = () => {
  return (
    <div className='play-container'>
      <Playvideo/>
      <Recommended/>
    </div>
  )
}

export default Video
