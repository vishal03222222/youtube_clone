import React from 'react'
import './Video.css'
import Playvideo from '../../components/playvideo/Playvideo'
import Recommended from '../../components/Recommended/Recommended'
const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className='play-container'>
      <Playvideo videoId={videoId}/>
      <Recommended/>
    </div>
  )
}

export default Video
