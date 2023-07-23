import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpecificDetails, fetchSpecificSeriesDetails, getSpecific, getSpecificSeries, removeSelectedMovieOrSeries } from "../../features/movies/movieSlice";
import "./movieDetail.scss"

const MovieDetail = () => {

    const linkID = useParams()

    const dispatching = useDispatch()
    const selecting = useSelector(getSpecific)
    const selectingSpecSer = useSelector(getSpecificSeries)


    useEffect(() => {
        dispatching(fetchSpecificDetails(linkID.imdbID))
        dispatching(fetchSpecificSeriesDetails(linkID.imdbID))

        return ()=>{
        dispatching(removeSelectedMovieOrSeries())

        }

    }, [dispatching, linkID.imdbID])

    console.log(selectingSpecSer.payload, selecting.payload);


    // console.log(selecting);

    let renderSpecific, movieOrSeries;


    if (selectingSpecSer.payload !== undefined) {

        selecting.payload.map((m) => {
            if (m) movieOrSeries = m
        })
        selectingSpecSer.payload.map((m) => {
            if (m) movieOrSeries = m
        })

        // renderSpecific = 
        // selecting.payload.map((m) => {
        if (movieOrSeries !== undefined) {
            // console.log(movieOrSeries);
            return (
                <div className="movie-section">
                    <div className="section-left">
                        <div className="movie-title">{movieOrSeries.Title}</div>

                        <div className="movie-rating">
                            <span>imdbID Rating <i className="fa fa-star"></i>: {movieOrSeries.imdbRating}</span>
                            <span>imdbID Votes <i className="fa fa-thumbs-up"></i>: {movieOrSeries.imdbVotes}</span>
                            <span>Runtime <i className="fa fa-film"></i>: {movieOrSeries.Runtime}</span>
                            <span>Year <i className="fa fa-calender"></i>: {movieOrSeries.Year}</span>
                        </div>
                        <div className="movie-plot">
                            {movieOrSeries.Plot}
                        </div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{movieOrSeries.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{movieOrSeries.Actors}</span>
                            </div>
                            <div>
                                <span>Genres</span>
                                <span>{movieOrSeries.Genre}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{movieOrSeries.Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <img src={movieOrSeries.Poster} alt={movieOrSeries.Title} />
                    </div>
                </div>
            )
        }
        // })
    }


    return (
        <>
            {/* {renderSpecific} */}

        </>
    )
}
export default MovieDetail;