import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import Routeconfig from './Route/Route';
import { Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routeconfig/>
      </BrowserRouter>
    </div>
  );
}

export default App;
