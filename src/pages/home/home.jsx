import React from 'react'
import './style.scss'
import HeroBaner from './HeroBaner/HeroBaner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import Rated from './topRated/Rated'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBaner/>
      <Trending/>
      <Popular/>
      <Rated/>
    </div>
  )
}

export default Home