import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Types from './components/Types'
import Major from './components/Major';
import InfoDisc from './components/InfoDisc';
import Footer from './components/Footer';




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/NW2/#home" exact element={<Home />} />
        <Route path="/NW2/#types" exact element={<Types />} />
        <Route path="/NW2/#major" exact element={<Major />} />
        <Route path="/NW2/#infodisc" exact element={<InfoDisc />} />
      </Routes>
      <Footer />

    </Router>

    
  );
}

export default App;
