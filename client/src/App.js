import {useState} from 'react';
import Login from './Login.js';
import NavBar from './NavBar';
import Inventory from './Inventory';


function App() {

  const [login, setLogin] = useState(false);
  const [userID, setUserID] = useState(0);
  const [newItem, setNewItem] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(false)



  return (
   <div>
    <NavBar setDisplayLogin = {setDisplayLogin} setLogin = {setLogin} login = {login} setNewItem = {setNewItem}/>
    {login ? <p>Welcome to the Inventory Management System</p> :''}
    {displayLogin ? <Login setLogin = {setLogin} setDisplayLogin = {setDisplayLogin}/> : ''}
    <Inventory login ={login} setUserID = {setUserID} newItem = {newItem} setNewItem = {setNewItem} /> 
   </div>
  );
}

export default App;
