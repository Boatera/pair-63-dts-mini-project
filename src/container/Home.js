import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../component/Footer";
import MovieCard from "../component/MovieCard";
import MovieCardLoading from "../component/MovieCardLoading";
import Navbar from "../component/Navbar";
import {
  movieAsync,
  popularMovieAsync,
  topMovieAsync,
  selectMovie,
  selectPopularMovie,
  selectTopMovie,
  selectLoadingState,
} from "../reducer/movie-slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovie);
  const popularMovies = useSelector(selectPopularMovie);
  const topMovies = useSelector(selectTopMovie);
  const isLoading = useSelector(selectLoadingState);
  const movLoading = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    dispatch(movieAsync());
    dispatch(popularMovieAsync());
    dispatch(topMovieAsync());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="root-container">
        {/* Navbar */}
        <Navbar />

        <div className="base-container">
          {/* List untuk OngoingMovies */}
          <div className="category-title">Ongoing</div>
          {isLoading ? (
            <div className="list-movie-container">
              {movLoading.map((item, index) => (
                <div key={item}>
                  <MovieCardLoading />
                </div>
              ))}
            </div>
          ) : (
            <div className="list-movie-container">
              {movies.map((item, index) => (
                <div key={index}>
                  <MovieCard movie={item} />
                </div>
              ))}
            </div>
          )}

          {/* List untuk Upcoming Movies */}
          <div className="category-title">Upcoming</div>
          {isLoading ? (
            <div className="list-movie-container">
              {movLoading.map((item, index) => (
                <div key={item}>
                  <MovieCardLoading />
                </div>
              ))}
            </div>
          ) : (
            <div className="list-movie-container">
              {popularMovies.map((item, index) => (
                <div key={index}>
                  <MovieCard movie={item} />
                </div>
              ))}
            </div>
          )}

          {/* List untuk Top Rated Movies */}
          <div className="category-title">Top Rated</div>
          {isLoading ? (
            <div className="list-movie-container">
              {movLoading.map((item, index) => (
                <div key={item}>
                  <MovieCardLoading />
                </div>
              ))}
            </div>
          ) : (
            <div className="list-movie-container">
              {topMovies.map((item, index) => (
                <div key={index}>
                  <MovieCard movie={item} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
