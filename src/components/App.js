import '../styles/App.css';
import Header from'./header';
import Home from './home';
import Careers from'./careers';
import About from'./about';
import Contact from'./contact';
import Footer from './footer';
import {Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/index" element={<Navigate to="/home" replace />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
