import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Types from './components/Types'
import Major from './components/Major';
import InfoDisc from './components/InfoDisc';
import Footer from './components/Footer';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />

        <Route path="/Home" exact element={<Home />} />
        <Route path="/Types" exact element={<Types />} />
        <Route path="/Major" exact element={<Major />} />
        <Route path="/Infodisc" exact element={<InfoDisc />} />
      </Routes>
      <Footer />

    </Router>

    
  );
}

export default App;
