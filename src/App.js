import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies';
import Series from './components/Series';
import Upcoming from './components/Upcoming';
import Moviedetails from './components/Moviedetails';
function App() {
  return (
    <BrowserRouter>
    <div className=' h-auto'>
      <div className='sticky top-0 z-10'><Header /></div>
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movies/:id" element={<Moviedetails />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
