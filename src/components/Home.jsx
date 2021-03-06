import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  Container,
  Badge,
  Form,
  Stack,
  FormControl,
  Button,
  Row,
  Dropdown,
} from "react-bootstrap";
import Movies from "./Movies";
import undrawSVG from "../assets/undraw_movie_night_re_9umk.svg"

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button was submitted:", inputValue);
    const API_KEY = process.env.REACT_APP_API_KEY;
    axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`)
      .then((res) => {
        console.log(res.data);
        setMovieData(res.data.Search);
        setResults(res.data.totalResults);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function FilterMovies(filter) {
    console.log(filter)
    if(filter === "NEWER") {
      setMovieData(
        movieData
        .slice()
        .sort(
          (a, b) =>
          (b.Year - a.Year)
        )
      )
    }
    if(filter === "OLDER") {
      setMovieData(
        movieData
        .slice()
        .sort(
          (a, b) =>
          (a.Year - b.Year)
        )
      )
    }
    if(filter === "MOVIE") {
      setMovieData(
        movieData
        .slice()
        .sort(
          (type) =>
          (type.Type === "movie")
        )
      )
    }
    if(filter === "SERIES") {
      setMovieData(
        movieData
        .slice()
        .sort(
          (type) =>
          (type.Type === "series")
        )
      )
    }
  }

  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <h1 className="text-warning my-4 text-center">Largest Movie Database</h1>
      <Form
        className="d-flex justify-content-center my-4"
        onSubmit={handleSubmit}
      >
        <Stack direction="horizontal" gap={3}>
          <FormControl
            type="search"
            placeholder="Search By Title"
            className="me-2 search"
            id="search__input"
            aria-label="Search"
            onChange={handleChange}
          />
          <Button variant="warning" onClick={handleSubmit}>
            Search
          </Button>
        </Stack>
      </Form>
      <div style={{ maxWidth: '1200px' }} className="d-flex justify-content-center align-items-center">
        <img className="img-fluid" src={undrawSVG} alt="movie night" />
      </div>
      <div className="d-flex justify-content-between my-4">
        <h6>
          <Badge pill bg="light" text="dark">
            Results: {results ? '1 - 10 of ' + results : 0}
          </Badge>
        </h6>
        <Form.Select aria-label="Default select" defaultValue="DEFAULT" className="w-50" onChange={(event) => FilterMovies(event.target.value)}>
          <option value="DEFAULT" disabled>Sort By:</option>
          <option value="NEWER">Newer</option>
          <option value="OLDER">Older</option>
          <option value="MOVIE">Movie</option>
          <option value="SERIES">Series</option>
        </Form.Select>
      </div>
      <Row style={{ gridGap: "3rem 0" }} xs={1} sm={2} md={3} lg={4} xl={5}>
        {movieData.slice(0, 10).map((movie, _index) => (
          // Movies.jsx Component
          // Pass in props
          <Movies movie={movie} key={_index} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
