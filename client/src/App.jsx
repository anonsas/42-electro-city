import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Home, Suppliers, Consumers, Bills } from './pages/index';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="consumers" element={<Consumers />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="bills" element={<Bills />} />
      </Routes>
    </div>
  );
}

export default App;
