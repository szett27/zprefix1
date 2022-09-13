import {useState} from 'react';
//Login page will allow a user to login
//Login page will allow a user to create a new account
//Login will authenticate user against database
//Login page will switch to a menu bar after successful login



function Login(props){

    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

   function authenticate(e){
        e.preventDefault();
        const data = {"username": user, "password": password}
     
        fetch('http://localhost:5000/login', 
            {method: 'POST', 
             headers: {
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(data)})
        .then(res=>res.json())
        .then(bool=>props.setLogin(bool))
        }

    return(
        <div>
        <form id = "login" type = "submit" onSubmit={(e)=>authenticate(e)}>
           <label>Username<input type = "text" id = "username" value = {user} onChange={(e)=>setUser(e.target.value)}/></label><br></br>
            <label>Password<input type = "password" id = "password" value = {password} onChange={(e)=>setPassword(e.target.value)} /></label>
            <br></br>
        <button type = "submit">Submit</button>
        </form>
        </div>
    )
}

export default Login;