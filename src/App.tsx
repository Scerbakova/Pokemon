import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Home from './Pages/Home';
import SinglePokemon from './Pages/SinglePokemon';

// const storeData = useSelector((store) => store);
// console.log(storeData);

const App = () => (
  <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:name" element={<SinglePokemon />} /> */}
        <Route path="/pokemon/:id" element={<SinglePokemon />} />
      </Routes>
    </Router>
  </div>
);

export default App;
