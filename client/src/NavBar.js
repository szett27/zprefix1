
/*--add My Items (button) 
--add All Items (button)


--pass user props to nav bar (user -> Logged In As: user.firstname + user.lastname)
--add names and user id to Nav Bar
		
		-- {login ? userinformation: ''}
		-- {ensure only user items are displayed}
		-- {only user items can be editable} */
//needs to inherit login stat from main page
//login true -> inventory management
//login false - generic store front
//    <Box sx={{ flexGrow: 1 }}>
// </Box>
 function NavBar(props){

    let signout = <button class = "btn btn-primary" onClick={()=>props.setLogin(false)}>Sign Out</button>
    let login = <button class = "btn btn-primary" onClick={()=>props.setLogin(false)}>Login</button>
    


    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">{props.login ? 'Inventory Management': 'Generic Storefront'}</span>
    <form class="form-inline my-2 my-lg-0">
    {props.login ? signout : login}

    </form>
    </nav>
         
      );


}


export default NavBar;





	


