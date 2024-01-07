import React from 'react'
import './style.scss'
import HeroBaner from './HeroBaner/HeroBaner'
import Trending from './trending/Trending'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBaner/>
      <Trending/>
      <div style={{height:1000}}></div>
    </div>
  )
}

export default Home