import React from 'react'
import './Home.css'
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/Feed/Feed'
const Home = ({Sidebar}) => {
  return (
    <>
    <Sidebar Sidebar={Sidebar}/>
    <div className={`container ${sidebar ? "" : "large-container"}`}>
    <Feed/>
</div>

    </>
  )
}

export default Home
