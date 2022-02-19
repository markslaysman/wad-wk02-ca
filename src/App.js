// React Imports
import { Routes, Route } from 'react-router-dom';

// My Imports
import AllMoviesPage from './pages/AllMovies';
import ReviewPage from './pages/MovieReview';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllMoviesPage />} />
        <Route path='/review' element={<ReviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
