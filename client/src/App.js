// import Profile from './PortfolioContainer/Home/Profile';
// import Footer from './PortfolioContainer/Home/Footer/Footer';
import './App.css';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
