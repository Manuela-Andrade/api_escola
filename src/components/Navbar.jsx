import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Link className="m-4 link__router" to="/"><button className="bg-dark button"><h2>Escola Resilia</h2></button></Link>            
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="m-1 link__router" to="/"><button className=" bg-dark font__nav button">HOME</button></Link>
              <Link className="m-1 link__router" to="/cadastro"><button className="bg-dark font__nav  button">CADASTRO</button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default HeaderNav;