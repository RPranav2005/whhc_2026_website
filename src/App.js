import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/Router';
import { useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const routing = useRoutes(Router);

  useEffect(() => {
    // Simulate loading time or wait for actual load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds to show reveal animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <div key="content">
            {routing}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
