import React from 'react'



const Genrelist = ({genrelist,onSelectGenre,selectedGenre}) => {
  

    return (
        <>
            <div className='flex mt-35 justify-center'>
                <select onChange={(e)=>onSelectGenre(e.target.value)} name="" id="" className=' bg-gray-700 opacity-60 backdrop-blur-md'>
                    <option value={selectedGenre}>All Genres</option>
                    {genrelist.map((genres) => {

                        return(<option key={genres.id} value={genres.id}>
                            {genres.name}
                        </option>)
                    })}
                </select>
            </div>
        </>
    )
}

export default Genrelist