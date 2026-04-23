import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/Router';
import { useRoutes } from 'react-router-dom';
import ParticleBackground from './components/Home/ParticleBackground';

function App() {
  const routing = useRoutes(Router);
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <ParticleBackground />
      {routing}
    </div>
  );
}

export default App;
