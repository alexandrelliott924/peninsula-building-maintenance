import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from'./header';
import Home from './home';
import GetQuote from './getQuote';
import Careers from'./careers';
import About from'./about';
import Contact from'./contact';
import Footer from './footer';
import {Routes, Route, Navigate} from 'react-router-dom';
import SkilledMaintenance from './skilledWorkers';
import TradeAssitant from './TradeAssitant';

function App() {
  const location = useLocation();

  //User brought to top of newly opened page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/index" element={<Navigate to="/home" replace />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/skilled-maintenance" element={<SkilledMaintenance/>} />
        <Route path="/careers/ta-cleaner" element={<TradeAssitant/>} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
