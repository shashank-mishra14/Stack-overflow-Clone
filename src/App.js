import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes/>
      </Router>
      </div>
      
  );
}

export default App;
