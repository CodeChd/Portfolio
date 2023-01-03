import './index.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './helper/particlesConfig';
import Home from './components/containers/home';
import About from './components/containers/about';
import Skills from './components/containers/skills';
import Resume from './components/containers/resume';
import Portfolio from './components/containers/portfolio';
import Contact from './components/containers/contact';
import Navbar from './components/navBar';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const Location = useLocation();
  const currentPath = Location.pathname === '/';
  return (
    <div className="App">
      {currentPath && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )}

      <div className="App_navbar-wrapper">
        <Navbar />
      </div>

      <div className="App_main-content-wrapper">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
