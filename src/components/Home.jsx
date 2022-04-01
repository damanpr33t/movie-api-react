import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Badge, Form, Stack, FormControl, Button, Row, Col, Card, ListGroupItem } from "react-bootstrap";

const Home = () => {
  const [movieData, setMovieData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [results, setResults] = useState('')
  
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("button was submitted", inputValue)
    axios.get(`http://www.omdbapi.com/?apikey=6ff3567a&s=${inputValue}`)
    .then((res => {
      console.log(res.data)
      setMovieData(res.data.Search)
      setResults(res.data.totalResults)
    }))
    .catch(err => console.log(err))
  }

  // useEffect(() => {
  //   const loadMovies = async () => {
  //     const url = `http://www.omdbapi.com/?apikey=6ff3567a&s=${"Spiderman"}`; //MY_SECRET_API_KEY
  //     try {
  //       const response = await fetch(`${url}`)
  //       const data = await response.json();
  //       console.log(data)
  //       setMovieData(data.Search);
  //     } catch (e) {
  //       console.log("Caught Error " + e)
  //     }
      
  //   };
  //   loadMovies();
  // }, []);

  return (
    <>
      <Container fluid style={{ minHeight: "100vh" }}>
      <Form className="d-flex justify-content-center my-4" onSubmit={handleSubmit}>
            <Stack direction="horizontal" gap={3}>
            <FormControl 
              type="search"
              placeholder="Search By Title"
              className="me-2 search"
              id="search__input"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="warning" onClick={handleSubmit}>Search</Button>
            </Stack>
          </Form>
        <div className="flex">
        <h6><Badge pill bg="light" text="dark" className="mx-4 my-2">Results: 1 - 10 of {results}</Badge></h6>
        </div>
        <Row style={{ gridGap: "3rem 0" }} xs={1} sm={2} md={3} lg={4} xl={5}>
      {movieData.slice(0, 10).map((movie, _index) => {
        // Destructure the data array objects
        const { Poster, Title, Type, Year, imdbID } = movie
        return (
          <Col key={_index}>
            <Card bg="dark" className="shadow p-3 mb-5">
              <Card.Img variant="top" src={Poster ? Poster : '../../assets/no_image_available.jpeg'} />
              <Card.Body>
                <Card.Title className="text-light my-2">
                  {Title}
                </Card.Title>
                <Button variant="secondary">Details</Button>
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
      })}
    </Row>
      </Container>
    </>
  );
};

export default Home;
