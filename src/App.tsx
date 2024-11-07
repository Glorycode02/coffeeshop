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
import Footer from './components/Footer'

function App() {
  const location = useLocation();

  // Check if the current path is "/login"
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/sign-up';

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
      {!isSignUpPage}

      {!isSignUpPage && (
        <>
          <Hero />
          <Mission />
          <About />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
