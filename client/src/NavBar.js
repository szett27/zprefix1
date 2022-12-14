
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
    let login = <button class = "btn btn-primary" onClick={()=>props.setDisplayLogin(true)}>Login</button>
    let newItem = <button class = "btn btn-primary" onClick={()=>props.setNewItem(true)}>New Item</button>
    let fullInv= <button class = "btn btn-primary" onClick={()=>props.setNewItem(true)}>Full Inventory</button>
    let myInv= <button class = "btn btn-primary" onClick={()=>props.setNewItem(true)}>My Inventory</button>


    return (
  <nav class="navbar sticky-top navbar-dark bg-dark">    
  <span class="navbar-brand mb-0 h1">{props.login ? 'Inventory Management': <a href = "/">Generic Storefront </a> }</span>
    <div style={{display: 'inline-block'}}>
    <ul class = 'navbar-nav mr-auto'>
    <li class = 'nav-item'>{props.login ? signout : login}</li>
    <li class = 'nav-item'>{props.login && !props.newItem ? newItem : ''}</li>
    <li class = 'nav-item'>{fullInv}</li>
    <li class = 'nav-item'>{login? myInv: ''}</li> 
    </ul>
    </div>
    </nav>
         
      );


}


export default NavBar;





	


