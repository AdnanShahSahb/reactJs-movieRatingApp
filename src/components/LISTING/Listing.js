import { useSelector } from "react-redux";
import {  getAllMovies, getAllSeries, getSpecific } from "../../features/movies/movieSlice";
import MovieCard from "../MOVIE_CARD/movieCard"
import "./Listing.scss"

const Listing = () => {

    const selecting = useSelector(getAllMovies)
    const selectingSeries = useSelector(getAllSeries)
    // console.log(selecting[0],selecting[1]);
    let renderMovies = "";
    let renderSeries = "";

    if (selecting !== undefined && selecting.payload !== undefined) {
        console.log(selecting.payload[0]);

        renderMovies = selecting.payload[1] === 200 ? (
            selecting.payload[0].map((movies, index) => {
                return (
                    <MovieCard key={index} data={movies} />
                )
            })

        )
            :
            (
                <div className="movies-error">
                    <h3>{selecting.Error}</h3>
                </div>
            )
    }

    if (selectingSeries !== undefined && selectingSeries.payload !== undefined) {

        renderSeries = selectingSeries.payload[1] === 200 ? (
            selectingSeries.payload[0].map((movies, index) => {
                return (
                    <MovieCard key={index} data={movies} />
                )
            })

        )
            :
            (
                <div className="movies-error">
                    <h3>{selectingSeries.Error}</h3>
                </div>
            )



    }


    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>MOVIES</h2>
                <div className="movie-container">{renderMovies}</div>
            </div>
            <div className="series-list">
                <h2>SERIES</h2>
                <div className="movie-container">{renderSeries}</div>
            </div>
        </div>
    )
}
export default Listing;