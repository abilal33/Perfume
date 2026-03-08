import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home2 from './Home2';
import Home3 from './Home3';
import CategoryPage from './CategoryPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/about" element={<Home2 />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}
