import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
    const handleAlert = () => {
        alert("Sorry I Haven't Got Around To Adding This Feature")
    }
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="md" style={{ minHeight: "100px" }}>
        <Container fluid className='d-flex flex-column'>
          <LinkContainer to="/">
            <Navbar.Brand className="text-warning">MovieDB</Navbar.Brand>
          </LinkContainer>
          <Nav className='justify-content-center'>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/movies">
              <Nav.Link>Movies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact"  onClick={handleAlert} className="cursor-not-allowed">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <p className='d-flex flex-column text-secondary'>Copyright &copy; MovieDB 2022</p>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Footer;
