import React from 'react'
import './style.scss'
import HeroBaner from './HeroBaner/HeroBaner'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBaner/>
      <div style={{height:1000}}></div>
    </div>
  )
}

export default Home