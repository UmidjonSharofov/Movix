import React from 'react'
import { useSelector } from 'react-redux'
import './style.scss'
const Genres = ({ data }) => {
  const {genres}=useSelector((state)=>state.home)
  
    return (
        <div className='genres'>
            {
                data?.map((v)=>{
                    if(!genres[v]?.name) return;
                    return(
                        <div className='genre' key={v}>
                            {genres[v].name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Genres