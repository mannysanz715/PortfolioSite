import { Route, Routes } from 'react-router-dom';
import './App.css';
// Page / Component imports
import NavBar from './components/NavBar/NavBar';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutMe from './pages/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
