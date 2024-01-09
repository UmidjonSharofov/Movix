import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwtichTabs from '../../../components/swtichTabs/SwtichTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Rated = () => {
  
    const [endpoint,setEndpoint]=useState("movie")
    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tabe) => {
        setEndpoint(tabe==="Movie"?'novies':'tv')
    }

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwtichTabs data={["Movies", "Tv Shows",]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    )
}

export default Rated