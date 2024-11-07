import './App.css'
import Mission from './components/Mission'
import Hero from './components/Hero'
import Nav from './components/Nav'
import About from './components/About'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'

function App() {
  const location = useLocation();

  // Check if the current path is "/login"
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isLoginPage && (
        <>
          <Hero />
          <Mission />
          <About />
        </>
      )}
    </>
  );
}

export default App;
