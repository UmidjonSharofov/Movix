import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './style.scss'

import UseFetch from '../../../hooks/useFetch'
import Img from '../../../components/lazyLoadImage/img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'


const HeroBaner = () => {

    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const { url } = useSelector((state) => state.home)
    const { data, loading } = UseFetch("/movie/upcoming")
    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };
   const Onclick = ()=>{
      if(query.length>0){
        navigate(`/search/${query}`);
      }
   }

    return (
        <div className='heroBanner'>
            {!loading &&
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            }
            <div className='opacity-layer'></div>
            <ContentWrapper>
                <div className="wrapper">
                    <div className='heroBanerContent'>
                        <span className="title">Welcom</span>
                        <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
                        <div className="serachInput">
                            <input
                                type="text"
                                placeholder="Search for a movie or tv show...."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <button onClick={Onclick}>Search</button>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBaner