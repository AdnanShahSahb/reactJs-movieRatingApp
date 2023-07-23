import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { fetchingTheMovies, fetchingTheSeries } from "../../features/movies/movieSlice"
import img from "../../images/imght.jpg"
import "./header.scss"

const Header = () => {

    const [term, setTerm] = useState('')
    const dispatching = useDispatch()


    return (
        <div className="header">
            <Link to="/" >
                <div className="logo">Movie App</div>
            </Link>
            <div className="search-bar">
                <form >
                    <input type='text' value={term} placeholder="Search movies / shows " onChange={(e) => { setTerm(e.target.value); dispatching(fetchingTheMovies(e.target.value)); dispatching(fetchingTheSeries(e.target.value)) }} />
                    {/* <button type="submit">Search</button> */}
                </form>
            </div>

            <div className="user-image">
                <img src={img} alt="usering" />
            </div>


        </div>
    )
}
export default Header;