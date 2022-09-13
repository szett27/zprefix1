

//needs to inherit login stat from main page
//login true -> inventory management
//login false - generic store front
//    <Box sx={{ flexGrow: 1 }}>
// </Box>
 function NavBar(props){

    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">{props.login ? 'Inventory Management': 'Generic Storefront'}</span>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">New Inventory Manager</button>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">{props.login ? 'Sign Out' : 'Login'}</button>

    </form>
    </nav>
         
      );


}


export default NavBar;