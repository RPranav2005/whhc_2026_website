import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/Router';
import { useRoutes } from 'react-router-dom';
function App() {
  const routing = useRoutes(Router);
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {routing}
    </div>
  );
}

export default App;
