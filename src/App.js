import './App.css';
import LogoBanner from './components/LogoBanner';
import TopBar from './components/TopBar';
import './components/topbar.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Careers from './pages/Careers';
import Skills from './pages/Skills';

function App() {


  return (
       
    <Router>
        <div className="App">
          <LogoBanner />
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
    </Router>
         
    
      
    
  );
}

export default App;
