import { Home } from '@/views/Home';
import { Routes, Route } from 'react-router';
import './App.css';
import { TripPlanner } from './views/TripPlanner';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/trip-planner" element={<TripPlanner />} />
    </Routes>
  );
}

export default App;
