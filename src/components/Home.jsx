import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Card, Carousel } from "react-bootstrap";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const Home = () => {
  return (
    <Container fluid>
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Row>
        <Col>
          <Card bg="dark">
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="text-light">Movie Title</Card.Title>
              <Card.Text className="text-light">Movie Description</Card.Text>
              <Button variant="secondary">Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Movie Title</Card.Title>
              <Card.Text>Movie Description</Card.Text>
              <Button>Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Movie Title</Card.Title>
              <Card.Text>Movie Description</Card.Text>
              <Button>Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Movie Title</Card.Title>
              <Card.Text>Movie Description</Card.Text>
              <Button>Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Movie Title</Card.Title>
              <Card.Text>Movie Description</Card.Text>
              <Button>Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Movie Title</Card.Title>
              <Card.Text>Movie Description</Card.Text>
              <Button>Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
