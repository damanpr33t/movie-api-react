import { useEffect, useState } from "react";
import { Button, Card, Col, ListGroupItem, Row } from "react-bootstrap";

const Movie = ({ inputValue }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const url = `http://www.omdbapi.com/?apikey=MY_SECRET_API_KEY&s=${inputValue ? inputValue : "batman"}`; //MY_SECRET_API_KEY
      try {
        const response = await fetch(`${url}`)
        const data = await response.json();
        console.log(data)
        setMovieData(data.Search);
      } catch (e) {
        console.log("Caught Error " + e)
      }
      
    };
    loadMovies();
  }, [inputValue]);
  return (
    <Row style={{ gridGap: "3rem 0" }} xs={1} md={3} lg={5}>
      {movieData.slice(0, 10).map((movie) => {
        // Destructure the data array objects
        const { Poster, Title, Type, Year, imdbID } = movie
        return (
          <Col>
            <Card bg="dark" className="shadow p-3 mb-5">
              <Card.Img variant="top" src={Poster} key={movie.id} />
              <Card.Body>
                <Card.Title key={movie.id} className="text-light my-2">
                  {Title}
                </Card.Title>
                <Button variant="secondary">Details</Button>
              </Card.Body>
              <ListGroupItem key={movie.id} variant="dark">
                Type: {Type}
              </ListGroupItem>
              <ListGroupItem  key={movie.id} variant="secondary">
                Year: {Year}
              </ListGroupItem>
              <ListGroupItem  key={movie.id} variant="dark">
                imdbID: {imdbID}
              </ListGroupItem>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Movie;
