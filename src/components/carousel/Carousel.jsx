import { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
// import CircleRating from "../circleRating/CircleRating";
// import Genres from "../genres/Genres";

import './style.scss'
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

const Carousel = ({ data, loading }) => {

    const carouselContainer = useRef()
    const { url } = useSelector((state) => state.home)
    const navigate = useNavigate()
    const skItme = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlok skeleton"></div>
                <div className="textBlok"></div>
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        )
    }

    const navigation = (dir) => {
        const container = carouselContainer.current

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });

    }

    return (
        <div className="carousel">
            <ContentWrapper>
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={(() => navigation('left'))}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={(() => navigation('right'))}

                />
                {
                    !loading ? (
                        <div  className="carouselItems"  ref={carouselContainer}>
                            {data?.map((v) => {
                                const posterUrl = v.poster_path ? url.poster + v.poster_path : PosterFallback
                                return (
                                    <div className="carouselItem" key={v.id} onClick={()=>navigate(`/${v.media_type}/${v.id}`)}>
                                        <div className="posterBlock">
                                            <Img src={posterUrl} />
                                            <CircleRating rating={v.vote_average.toFixed(1)} />
                                            <Genres data={v.genre_ids.slice(0, 2)} />
                                        </div>
                                        <div className="textBlock">
                                            <span className="title">
                                                {v.title || v.name}
                                            </span>
                                            <span className="date">
                                                {dayjs(v.release_Date).format("MMM D , YYYY")}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    ) : (
                        <div className="loadingSkeleton">
                            {skItme()}
                            {skItme()}
                            {skItme()}
                            {skItme()}
                            {skItme()}
                        </div>
                    )
                }
            </ContentWrapper>
        </div >
    )
}

export default Carousel