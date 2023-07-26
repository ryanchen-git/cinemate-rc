import { Routes, Route } from 'react-router-dom';
import { MovieList } from '../pages/MovieList';
import { PageNotFound } from '../pages/PageNotFound';
import { Movie } from '../pages/Movie';

export const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<MovieList apiPath='now_playing' />}></Route>
        <Route path='movie/:id' element={<Movie />}></Route>
        <Route
          path='movie/upcoming'
          element={<MovieList apiPath='upcoming' />}
        ></Route>
        <Route
          path='movie/popular'
          element={<MovieList apiPath='popular' />}
        ></Route>
        <Route
          path='movie/top_rated'
          element={<MovieList apiPath='top_rated' />}
        ></Route>
        <Route
          path='search/:name'
          element={<MovieList apiPath='search' />}
        ></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};
