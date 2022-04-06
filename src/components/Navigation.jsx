import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  const handleAlert = () => {
    alert("Sorry I haven't got around to adding this feature")
  }
    return (
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="sm">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand className="text-warning">MovieDB</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/movies">
                <Nav.Link>Movies</Nav.Link>
              </LinkContainer>
              <LinkContainer to="#" onClick={handleAlert} className="cursor-not-allowed">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation;
