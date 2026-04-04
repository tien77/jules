import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import CourseList from './pages/CourseList';
import Cart from './pages/Cart';
import Login from './pages/Login';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
