import React from 'react'
import { useParams } from 'react-router-dom'

import './style.scss'
import useFetche  from '../../hooks/useFetch'
import DetalisBanner from './detalisBanner/DetalisBanner'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Similar from './carousel/Similar'
import Recommendation from './carousel/Recommendation.jsx'

const Details = () => {
  const {mediaType,id}=useParams()
  const {data,loading}=useFetche(`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading}=useFetche(`/${mediaType}/${id}/credits`)
  return (
    <div>
      <DetalisBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType}  id={id}/>
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default Details