import { Route, Routes } from 'react-router-dom';
import './App.css';
// Page / Component imports
import NavBar from './components/NavBar/NavBar';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutMe from './pages/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
