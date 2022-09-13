import {useState} from 'react';
import './App.css';
import Login from './Login.js';
import NavBar from './NavBar';
import Inventory from './Inventory';


function App() {

  const [login, setLogin] = useState(true);
  const [inventory, setinventory] = useState({id: '', status: 'false'});

  const [authorized, getAuthorized] = useState(true)
  return (
   <div>
   {/*<NavBar />*/} 
    <Login />
    <Inventory login={login}/> 
    {/* <Inventory /> */}
   </div>
  );
}

export default App;
