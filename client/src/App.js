import {useState} from 'react';
import Login from './Login.js';
import NavBar from './NavBar';
import Inventory from './Inventory';


function App() {

  const [login, setLogin] = useState(false);
  const [userID, setUserID] = useState(0);



  return (
   <div>
    <NavBar setLogin = {setLogin} login = {login}/>
    {login ? <p>Welcome to the Inventory Management System</p> : <Login setLogin = {setLogin}/>}
    <Inventory login ={login} setUserID = {setUserID} /> 
   </div>
  );
}

export default App;
