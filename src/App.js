// React Imports
import { Routes, Route } from 'react-router-dom';

// My Imports
import AllMoviesPage from './pages/AllMovies';
import LoadingPage from './pages/LoadingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllMoviesPage />} />
        <Route path='/loadingpage' element={<LoadingPage />} />
      </Routes>
    </div>
  );
}

export default App;
