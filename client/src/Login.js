import {useState} from 'react';
//Login page will allow a user to login
//Login page will allow a user to create a new account
//Login will authenticate user against database
//Login page will switch to a menu bar after successful login



function Login(props){
    const [createUser, setCreateUser] = useState(false)
    const [lastname, setLastName] = useState('');
    const [firstname, setFirstName] = useState('');
    const [username, setUserName] =useState('');
    const [password, setPassword] = useState('');

    let newUser =<div>
     <label>First Name<input class = 'form-control' type = "text" id = "firstname" value = {firstname} onChange={(e)=>setFirstName(e.target.value)}/></label><br></br>
    <label>Last Name<input class = 'form-control' type = "text" id = "lastname" value = {lastname} onChange={(e)=>setLastName(e.target.value)} /></label>
    </div>



   function authenticate(e){
        e.preventDefault();
        const data = {"username": username, "password": password}
     
        fetch('http://localhost:5000/login', 
            {method: 'POST', 
             headers: {
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(data)})
        .then(res=>res.json())
        .then(bool=>{
            //need to get userID on authenticanton props.setUserID()
            props.setLogin(bool)})
                }

    function makeUser(e){
            e.preventDefault();
            const data = {"firstname": firstname, "lastname": lastname, "user_name": username, "password": password}
            fetch('http://localhost:5000/register', 
            {method: 'POST', 
             headers: {
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(data)})
        .then(res=>res.json())
        .then(props.setLogin(true), setCreateUser(false))
        }
    

    return(
        <div class='form-group'>
        <form id = "login" type = "submit" onSubmit={createUser ? (e)=>makeUser(e) : (e)=>authenticate(e)}>
            {createUser ? newUser : ''}
           <label>Username<input class = 'form-control' type = "text" id = "username" value = {username} onChange={(e)=>setUserName(e.target.value)}/></label><br></br>
            <label>Password<input class = 'form-control' type = "password" id = "password" value = {password} onChange={(e)=>setPassword(e.target.value)} /></label>
            <br></br>
        <button type = "submit" class = "btn btn-primary">Submit</button>
        </form>
        {!createUser ? <button type = "submit" class = "btn btn-primary" onClick ={()=>setCreateUser(true)}>Create New User</button> : ''}
        </div>
    )
}

export default Login;