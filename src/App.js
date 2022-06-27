import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { ToastContainer, toast } from 'react-toastify';
import NavBar from './components/NavBar';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const routing = useRoutes(routes());
  return (
    <div className="App">
      <ToastContainer position="top-right" />
      <NavBar />
      {routing}
    </div>
  );
}

export default App;
