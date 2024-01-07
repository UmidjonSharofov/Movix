import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwtichTabs from '../../../components/swtichTabs/SwtichTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {
  
    const [endpoint,setEndpoint]=useState("day")
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tabe) => {
        setEndpoint(tabe==="Day"?'day':'week')
    }

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwtichTabs data={["Day", "Week",]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending