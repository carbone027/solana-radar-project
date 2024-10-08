import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Cluster from './pages/Cluster';
import Train from './pages/Train';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/TrainModel" element={<Train />} />
        <Route path="/PredictionModel" element={<Cluster />} />
      </Routes>
    </Router>
  );
}

export default App;