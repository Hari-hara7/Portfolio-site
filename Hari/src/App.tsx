import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Guestbook from "./components/Guestbook";
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Work from './routes/Work';
import Skills from './routes/Skills';
import Achievements from './routes/Achievements';
import Collaboration from './routes/Collaboration';
import Contact from './routes/Contact';
import PortfolioOverview from './routes/PortfolioOverview';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-bg text-white min-h-screen">
        <Navbar />
       
        <main>
          <Routes>
          <Route path="/guestbook" element={<Guestbook />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/PortfolioOverview" element={<PortfolioOverview />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
