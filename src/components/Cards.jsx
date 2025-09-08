import React from 'react'
import {FaHeart,FaRegHeart} from "react-icons/fa"
import { useContext } from 'react';
import { WatchListContext } from './WatchListContext';

const Cards = ({ movies }) => {
  const myStyle = {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    // backgroundColor: "white",
    borderRadius: "10px"
  };
  const {togglewatchlist,watchlist}=useContext(WatchListContext)
  const inwatchlist=watchlist.some((m)=>m.id==movies.id)
  return (

    <>
      <div className='bg-gray-800 mt-16 rounded-2xl relative' style={myStyle}>
        <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path} `} alt={movies.title} className=' rounded-t-lg w-full  h-80' />
        <h1 className='font-bold text-white mt-4 flex justify-center'>{movies.title}</h1>
        <p className='font-semibold text-gray-400 flex justify-center mb-2'>{movies.release_date}</p>
        <button onClick={()=>togglewatchlist(movies)} className='absolute top-2 right-2 text-red-500 text-2xl'>
          {inwatchlist? <FaHeart /> : <FaRegHeart />}
        </button>

      </div>
    </>
  )
}

export default Cards