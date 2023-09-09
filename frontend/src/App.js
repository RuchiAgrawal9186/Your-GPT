
import './App.css';
import MainRoutes from './components/MainRoutes';
import Navbar from './components/Navbar';
// import Homepage from './pages/Homepage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Navbar/>
      <Toaster width="40%" position='top-center'/>
      <MainRoutes/>
    </>
  );
}

export default App;
