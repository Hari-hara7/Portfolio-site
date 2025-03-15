import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
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
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import CreateBlogPage from './pages/CreateBlogPage';

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_API,
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="bg-bg text-white min-h-screen">
          <Navbar />
         
          <main>
            <Routes>
              <Route path="/guestbook" element={<Guestbook />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/collaboration" element={<Collaboration />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/PortfolioOverview" element={<PortfolioOverview />} />
              <Route path="/display" element={<HomePage />} />
              <Route path="/blog/:slug" element={<BlogPage />} />
              <Route path="/create" element={<CreateBlogPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
