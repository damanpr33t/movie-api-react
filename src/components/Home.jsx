import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useRef } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Pagination,
  ListGroupItem,
  Spinner,
  Badge,
} from "react-bootstrap";

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [results, setResults] = useState(0);

  useEffect(() => {
    const loadMovies = async () => {
      const url = "http://www.omdbapi.com/?apikey=6ff3567a&s=avengers";
      const response = await fetch(`${url}`);
      const data = await response.json();
      // console.log(data)
      const results = data.totalResults;
      setResults(results);
      setMovieData(data.Search);
    };
    loadMovies();
  });

  return (
    <>
      <Container fluid>
        <h6><Badge pill bg="secondary" text="dark" style={{ paddingTop: "2em" }}>Results: {results}</Badge></h6>
        <Row style={{ margin: "3rem 0" }} xs={1} md={2} lg={4}>
          {movieData.slice(0, 8).map((movie) => {
            return (
              <Col>
                <Card bg="dark" className="shadow p-3 mb-5">
                  <Card.Img variant="top" src={movie.Poster} />
                  <Card.Body>
                    <Card.Title className="text-light" key={movie.title}>
                      {movie.Title}
                    </Card.Title>
                    <Card.Text className="text-light" key={movie.plot}>
                      {movie.Plot}
                    </Card.Text>
                    <Button variant="secondary">Details</Button>
                  </Card.Body>
                  <ListGroupItem key={movie.actors}>
                    Actors: {movie.Actors}
                  </ListGroupItem>
                  <ListGroupItem key={movie.directors}>
                    Directors: {movie.Directors}
                  </ListGroupItem>
                  <ListGroupItem key={movie.writer}>
                    Writers: {movie.Writer}
                  </ListGroupItem>
                  <ListGroupItem key={movie.genre}>
                    Genre: {movie.Genre}
                  </ListGroupItem>
                  <ListGroupItem key={movie.rated}>
                    Rated: {movie.Rated}
                  </ListGroupItem>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Container>
    </>
  );
};

export default Home;
