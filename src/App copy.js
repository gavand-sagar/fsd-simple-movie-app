import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import MovieDetails from './MovieDetails';
import MovieSection from './MovieSection';

function App() {

  return (<>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/details/:id' element={<MovieDetails />}></Route>     
    </Routes>
  </>)
}

export default App;
