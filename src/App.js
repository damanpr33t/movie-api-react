import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="md">
        <Container fluid>
          <Navbar.Brand href="home">Movie Hub</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary" href="#" new>Search</Button>{' '}
          </Form>
        </Container>
      </Navbar>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
