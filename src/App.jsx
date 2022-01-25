
import './styles/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Body from './components/Body';


function App() {
  return (
 
      <Router>
      <Navbar />
      <Header />
      <Body/>
      </Router>
    
  );
}

export default App;
