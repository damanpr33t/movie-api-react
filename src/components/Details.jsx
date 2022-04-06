import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NoImagePoster from "../assets/no_image_available.jpeg";
import SomethingWentWrong from "../assets/oops-something-went-wrong.jpg"

const Details = () => {
  const [movie, setMovie] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    const loadMovie = async () => {
      axios
        .get(`http://www.omdbapi.com/?apikey=6ff3567a&i=${id}`)
        .then((res) => {
          console.log(res.data);
          setMovie(res.data);
        })
        .catch((err) => {
            console.log(err)
            return (
                <>
                    <img src={SomethingWentWrong} alt=""></img>
                </>
            )
        });
    };
    loadMovie();
  }, [id]);

  return (
    <>
      <Container
        fluid
        className="d-flex"
      >
        <div className="w-50 my-4 px-4">
          <img
            src={movie.Poster === "N/A" ? NoImagePoster : movie.Poster}
            alt="poster"
            className="img-fluid rounded"
          />
        </div>
        <div className="w-50">
          <h1 className="text-warning my-4 fw-bold">
            {movie.Title === "N/A" ? "" : movie.Title} <span className="text-secondary">{movie.Year === "N/A" ? "" : "(" + movie.Year + ")"}</span>
          </h1>
          <div>
            <p>
                {movie.Rated === "N/A" ? "" : movie.Rated + " | "} {movie.Genre === "N/A" ? "" : movie.Genre} {movie.Runtime === "N/A" ? "" : " | " + movie.Runtime}
            </p>
          </div>
          <div>
            <p>
              {movie.Awards === "N/A" ? "" : movie.Awards}
            </p>
          </div>
          <div>
            {movie.Plot === "N/A"
              ? ""
              : <><h6>Overview</h6> <p>{movie.Plot}</p></>}
          </div>
          <>
            <span className="text-secondary fw-normal"> {movie.Actors === "N/A" ? "" : <>Actors: {movie.Actors}<br></br></>}</span> 
            <span className="text-secondary fw-normal"> {movie.Director === "N/A" ? "" : <>Director(s): {movie.Director}<br></br></>}</span> 
            <span className="text-secondary fw-normal"> {movie.Country === "N/A" ? "" : <>Country: {movie.Country}<br></br></>}</span>
          
            <p>
                <span className="text-secondary fw-normal"> {movie.imdbID === "N/A" ? "" : <>imdbID: {movie.imdbID}</>}</span>
            </p>
          </>
        </div>
      </Container>
    </>
  );
};

export default Details;
