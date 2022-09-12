import {useState} from 'react';
import './App.css';
import Login from './Login.js';
import NavBar from './NavBar';
import Inventory from './Inventory';


function App() {

  const [login, setLogin] = useState(false);
  const [inventory, setinventory] = useState({id: '', status: 'false'});

  const [authorized, getAuthorized] = useState(true)
  return (
   <div>
   {/*<NavBar />*/} 
    <Login />
    <Inventory /> 
    {/* <Inventory /> */}
   </div>
  );
}

export default App;
