import { createContext, useState,useEffect } from "react";
export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([])
    const [genrelist, setGenrelist] = useState([])
    useEffect(() => {
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=e07e59eaac41a3e20be1ac1408c3c304`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setGenrelist(data.genres || []));


    }, [])
    const togglewatchlist = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id)
        if (index == -1) {
            setWatchlist([...watchlist, movie])
        } else {
            setWatchlist([...watchlist.slice(0, index), ...watchlist.slice(index + 1)])
        }

    }

    return (
        <WatchListContext.Provider value={{ watchlist, togglewatchlist,genrelist }}>
            {children}
        </WatchListContext.Provider>
    )

}