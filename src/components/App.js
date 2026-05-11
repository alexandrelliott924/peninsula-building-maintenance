import '../styles/App.css';
import Header from'./header';
import Home from './home';
import Careers from'./careers';
import About from'./about';
import Contact from'./contact';
import Footer from './footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
