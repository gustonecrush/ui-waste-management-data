import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import DataSampah from './pages/DataSampah';
import InputSampah from './pages/InputSampah';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

       <Router>
        <Routes>
          <Route path="/" element={<DataSampah/>} />
          <Route path="/input-sampah" element={<InputSampah/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
