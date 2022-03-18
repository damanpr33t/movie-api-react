import { Button, Container, Form, FormControl, Nav, Navbar, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="md" className="shadow p-3 mb-5">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand className="text-warning">Movie Hub</Navbar.Brand>
          </LinkContainer>
          <Nav className='me-auto'>
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
          <Form className="d-flex">
            <Stack direction="horizontal" gap={3}>
            <FormControl 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>{' '}
            <div className="vr" />
            <Button variant="outline-secondary">Clear</Button>
            </Stack>
          </Form>
        </Container>
      </Navbar>
    );
}

export default Navigation;