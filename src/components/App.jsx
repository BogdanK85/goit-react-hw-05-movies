import { HomePage } from 'pages/HomePage/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import MoviePage from 'pages/MoviePage/MoviePage';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Casts from './Casts/Casts';
import { Layout } from './Layout/Layout';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Casts />} />
            <Route path="review" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
