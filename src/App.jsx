import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/containers/home';
import About from './components/containers/about';
import Skills from './components/containers/skills';
import Resume from './components/containers/resume';
import Portfolio from './components/containers/portfolio';
import Contact from './components/containers/contact';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
