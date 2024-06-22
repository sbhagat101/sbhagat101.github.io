import './App.css';
import HeroSection from './Sections/Hero.js';
import AboutUs from './Sections/About.js';
import Navbar from './Sections/Nav.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <HeroSection/>
    </BrowserRouter>
  );
}

export default App;
