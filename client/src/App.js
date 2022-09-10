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
    <NavBar >
    <h1>Z-Prefix CRUD APP</h1>
    <Login />
    {authorized ? <Inventory /> : window.alert('Not authroized') }
    {/* <Inventory /> */}
   </div>
  );
}

export default App;
