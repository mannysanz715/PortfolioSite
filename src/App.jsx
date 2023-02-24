import { Route, Routes } from 'react-router-dom';
import './App.css';
// Page / Component imports
// import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <>
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
