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
      <Navbar />
      <Routes>
        <Route path="/" component={<Navigate to="/home" />} />

        <Route path="/home" component={<Home />} />
        <Route path="/types" component={<Types />} />
        <Route path="/major" component={<Major />} />
        <Route path="/infodisc" component={<InfoDisc />} />
      </Routes>
      <Footer />

    </Router>

    
  );
}

export default App;
