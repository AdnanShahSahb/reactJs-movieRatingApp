import './App.scss';
import Footer from './components/FOOTER/footer';
import Header from './components/HEADER/header';
import Home from "./components/HOME/home"
import MovieDetail from './components/MOVIE_DETAIL/movieDetail';
import PageNotFound from './components/PAGE_NOT_FOUND/pageNotFound';
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path="/reactJs-movieRatingApp" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
