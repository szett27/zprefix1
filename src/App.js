import {useState} from 'react';
import './App.css';
import Login from './Login.js';
import Inventory from './Inventory';

function App() {

  const [authorized, getAuthorized] = useState(true)
  return (
   <div>
    <h1>Z-Prefix CRUD APP</h1>
    <Login />
    {authorized ? <Inventory /> : window.alert('Not authroized') }
    {/* <Inventory /> */}
   </div>
  );
}

export default App;
