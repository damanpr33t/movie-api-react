import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, ListGroupItem, Row } from "react-bootstrap";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const url = `http://www.omdbapi.com/?apikey=6ff3567a&s=top`; //MY_SECRET_API_KEY
      try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        console.log(data);
        setMovieData(data.Search);
      } catch (e) {
        console.log("Caught Error " + e);
      }
    };
    loadMovies();
  }, []);

  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <h1>
        Featured<span className="text-warning">Titles</span>
      </h1>
      <Row style={{ gridGap: "3rem 0" }} xs={1} sm={2} md={3} lg={4} xl={5}>
        {movieData.slice(0, 10).map((movie, _index) => {
          // Destructure the data array objects
          const { Poster, Title, Type, Year, imdbID } = movie;
          return (
            <Col key={_index}>
              <Card bg="dark" className="shadow p-3 mb-5">
                <Card.Img
                  variant="top"
                  src={Poster ? Poster : "../../assets/no_image_available.jpeg"}
                />
                <Card.Body>
                  <Card.Title className="text-light my-2">{Title}</Card.Title>
                  <Button variant="secondary">Details</Button>
                </Card.Body>
                <ListGroupItem variant="dark">Type: {Type}</ListGroupItem>
                <ListGroupItem variant="secondary">Year: {Year}</ListGroupItem>
                <ListGroupItem variant="dark">imdbID: {imdbID}</ListGroupItem>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Movies;
