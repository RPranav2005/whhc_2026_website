import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/Router';
import { useRoutes } from 'react-router-dom';

function App() {

  const routing = useRoutes(Router);
  return (
    <div>
      {routing}
    </div>
  );
}

export default App;
