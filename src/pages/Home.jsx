import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [pages, setPages] = useState(1)
  const [search, setSearch] = useState("")
  const handleclick = () => {
    setPages(pages - 1)
  }
  const handleclick1 = () => {
    setPages(pages + 1)
  }
  const handlechange = (event) => {
    setSearch(event.target.value)

  }


  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?page=${pages}&api_key=e07e59eaac41a3e20be1ac1408c3c304`;
    if (search) {
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=e07e59eaac41a3e20be1ac1408c3c304`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));


  }, [pages, search])
  return (
    <>
      <div className='p-4 pt-16'>
        <div>
          <input onChange={handlechange} type="text" placeholder='Search Movies....' className='z-10 w-3/4 md:w-1/2 bg-gray-900 backdrop-blur-md opacity-60 text-white p-2 fixed top-16 rounded-lg transform -translate-x-1/2 left-1/2' />
        </div>
        <div className='card-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {movies.map(movies => {
            return (<Cards key={movies.id} movies={movies} />)


          })}


        </div>
        <div className='pagination-container flex justify-between mt-5'>
          <button className='bg-gray-700 text-white p-2 font-semibold rounded-xl cursor-pointer' disabled={pages == 1} onClick={handleclick}>Previous</button>
          <button className='bg-gray-700 text-white p-2 font-semibold rounded-xl cursor-pointer' onClick={handleclick1}>Next</button>
        </div>
      </div>
    </>
  )
}

export default Home