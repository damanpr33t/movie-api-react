import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="md" style={{ maxHeight: "100px" }}>
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand className="text-warning">MovieDB</Navbar.Brand>
          </LinkContainer>
          <Nav className='d-flex justify-content-end'>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/movies">
              <Nav.Link>Movies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Navigation;
