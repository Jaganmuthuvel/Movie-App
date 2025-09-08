import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { WatchListContext } from '../components/WatchListContext'

const Navbar = () => {
  const { watchlist } = useContext(WatchListContext)
  return (
    <>
      <div className="flex justify-between bg-black text-white font-bold p-4 fixed top-0 w-full z-10">
        <Link to="/">Movie APP</Link>
        <Link to="/Watchlist">Watchlist({watchlist.length})</Link>
      </div>
    </>
  )
}

export default Navbar