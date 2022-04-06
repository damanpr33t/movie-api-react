import { Button, Card, Col, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NoImagePoster from '../assets/no_image_available.jpeg'

const Movies = ({ movie, _index }) => {
  const handleDetails = () => {
    localStorage.setItem('id', `${imdbID}`)
  }

  const { Poster, Title, Type, Year, imdbID } = movie
  return (
    <Col key={_index}>
            <Card bg="dark" className="shadow p-3 mb-5">
              <Card.Img variant="top" src={Poster === 'N/A' ? NoImagePoster : Poster} />
              <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                <Card.Title className="text-light my-2">
                  {Title}
                </Card.Title>
                <LinkContainer to="/details" onClick={handleDetails}>
                  <Button variant="secondary">Details</Button>
                </LinkContainer>
              </Card.Body>
              <ListGroupItem variant="dark">
                Type: {Type}
              </ListGroupItem>
              <ListGroupItem  variant="secondary">
                Year: {Year}
              </ListGroupItem>
              <ListGroupItem  variant="dark">
                imdbID: {imdbID}
              </ListGroupItem>
            </Card>
          </Col>
  );
};

export default Movies;
