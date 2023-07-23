import { useEffect } from "react"
import "./home.scss"
import Listing from "../LISTING/Listing"

// import axios from "axios"


// import movieApi from "../../common/apis/movieAPIs"
import { useDispatch } from "react-redux"
import { fetchingTheMovies, fetchingTheSeries, fetchSpecificDetails } from "../../features/movies/movieSlice"
// import { APIKey } from "../../common/apis/movieAPI_keys"

const Home = () => {

    const dispatching = useDispatch()
    useEffect(() => {
        // const movieText = 'Guardians'

        dispatching(fetchingTheMovies())
        dispatching(fetchingTheSeries())
        // dispatching(fetchSpecificDetails())

    }, [dispatching])

    return (
        <div className="banner-img" >

            <Listing />
        </div>
    )
}
export default Home;