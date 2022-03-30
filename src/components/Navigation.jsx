import { Button, Container, Form, FormControl, Nav, Navbar, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = ({ inputValue, setInputValue }) => {
    const handleSubmit = (event) => {
      let updatedInputValue = setInputValue(inputValue.search)
      event.preventDefault()
      return updatedInputValue
    }
    
    return (
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="md" style={{ maxHeight: "100px" }}>
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
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Stack direction="horizontal" gap={3}>
            <FormControl 
              type="search"
              placeholder="Search By Title"
              className="me-2 search"
              id="search__input"
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
