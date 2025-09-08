import React from 'react'
import Genrelist from '../components/Genrelist'
import { useContext, useState } from 'react'
import { WatchListContext } from '../components/WatchListContext'
import Cards from '../components/Cards'

const Watchlist = () => {
  const { watchlist, genrelist } = useContext(WatchListContext)
  const [search, setSearch] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("")
  const filtermovies = watchlist.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase())).filter((movie) => {
    return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre));
  })
  return (
    <>
      <div className='p-4'>
        <div>
          <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search Movies....' className='z-10 w-3/4 md:w-1/2 bg-gray-900 backdrop-blur-md opacity-60 text-white p-2 fixed top-16 rounded-lg transform -translate-x-1/2 left-1/2' />
        </div>
        <Genrelist genrelist={genrelist} onSelectGenre={setSelectedGenre} selectedGenre={selectedGenre} filtermovies={filtermovies} />
        <div className='card-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {filtermovies.map(movies => {
            return (<Cards key={movies.id} movies={movies} />)
          })}


        </div>

      </div>

    </>
  )
}

export default Watchlist