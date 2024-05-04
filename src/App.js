// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from './pages/Movie';
import SearchPage from './pages/Search';
import style from './App.module.scss';



function App() {
  return (
    <div className={style.container}>
      <Router>
        <Routes>
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;