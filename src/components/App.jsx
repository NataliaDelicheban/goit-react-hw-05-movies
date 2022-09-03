import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';
import Menu from 'components/Menu/Menu';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(()=> import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const MovieDetailsCast = lazy(() => import('pages/MovieDetails/MovieDetailsCast'));
const MovieDetailsReviews = lazy(() => import('pages/MovieDetails/MovieDetailsReviews'));

function App() {
  return (
    <div
      style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '25px',
      textAlign: 'center',
    }}
    >
      <Menu />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}> 
          <Route path="cast" element={<MovieDetailsCast />}/>
          <Route path="reviews" element={<MovieDetailsReviews />}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    </div>
  );
};
export default App;