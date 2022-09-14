import {useState} from 'react';
import Login from './Login.js';
import NavBar from './NavBar';
import Inventory from './Inventory';


function App() {

  const [login, setLogin] = useState(false);
  const [userID, setUserID] = useState(0);
  const [inventory, setinventory] = useState({id: '', status: 'false'});

  const [authorized, getAuthorized] = useState(true)

  console.log(`Login status: ${login}`)

  return (
   <div>
    <NavBar setLogin = {setLogin} login = {login}/>
    {login ? <Inventory login ={login} userID = {userID} /> : <Login setLogin = {setLogin}/>}
   </div>
  );
}

export default App;
