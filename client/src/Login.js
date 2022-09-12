
//Login page will allow a user to login
//Login page will allow a user to create a new account
//Login will authenticate user against database
//Login page will switch to a menu bar after successful login



function Login(){

    // userName = useState()
    //

    return(
        <div>
        <form id = "login" type = "submit">
            <input type = "text" id = "username" />
            <input type = "password" id = "password" />
        </form>
        <button type = "submit" onSubmit={()=>window.alert("Submitted")}>Submit</button>
        <button>New Inventory Manager</button>
        </div>
    )
}

export default Login;