import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar'
import Routes from './Routes'
import {Routes,Route} from 'react-router-dom'


import Home from './pages/Home/Home'
 import Auth from './pages/Auth/Auth'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes/>
      <Routes>
      <Route exact path='/welcome' component={Home}/>
     <Route path='/Auth' component={Auth}/>
      </Routes>
      </BrowserRouter >
      </div>
      
  );
}

export default App;
