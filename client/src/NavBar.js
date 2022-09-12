
import Container from 'react-bootstrap/Container';
import Navbar   from 'react-bootstrap/Navbar'
//needs to inherit login stat from main page
//login true -> inventory management
//login false - generic store front
//    <Box sx={{ flexGrow: 1 }}>
// </Box>
 function NavBar(){

    return (
        <Navbar>
            <Container>
                <Navbar.Text>Z's StoreFront</Navbar.Text>

            </Container>

        </Navbar>
         
      );


}


export default NavBar;