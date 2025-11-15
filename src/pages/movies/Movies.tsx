import { useCallback, useEffect, useState } from "react"
import { NavLink } from "react-router"
import ApiClient from  "../../utils/ApiClient"

interface Movie{
    _id : string,
    judul : string,
    tahunRilis : string,
    sutradara : string,
    createdAt : string,
    updateAt : string,
}
function Movies(){
    const [movie,setMovies] = useState<Movie[]>([])

    const fetchMovies = useCallback(async() => {
        const response = await ApiClient.get("/movies")

        if(response.status == 200){
            setMovies(response.data.data)
        }
    }, [])

    useEffect(() => {
        fetchMovies()
    }, [fetchMovies])
    
    return<div className="container mx-auto">
        <div className="d-flex justify-content-between my-3">
        <h4>Movie Page</h4>
        <NavLink to="/add-movie" className="btn btn-primary">Add movie</NavLink>
        </div>
    </div>
}

export default Movies