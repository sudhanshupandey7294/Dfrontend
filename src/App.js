import  { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Loader from './components/Loader';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Achievements from "./components/Sections/Achievements";
import FAQ from "./components/Sections/FAQ";



function App() {
   
      
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDone(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loadingDone && <Loader />}
      {loadingDone && (
        
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                    <Achievements />
                    <FAQ />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        
      )}
    </>
  );
}

export default App;



