import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="bg-light">
      <Router>
      <Navigation inputValue={inputValue} setInputValue={setInputValue} />
        <Routes>
          <Route path="/" element={<Home inputValue={inputValue} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
