import './App.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import SinglePokemon from './Pages/SinglePokemon';

const App = () => (
  <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<SinglePokemon />} />
      </Routes>
    </Router>
  </div>
);

export default App;
