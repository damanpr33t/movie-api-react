import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Badge } from "react-bootstrap";
import Movie from "./ui/Movie";
import PageNav from "./ui/PageNav";

const Home = ({ inputValue }) => {

  return (
    <>
      <Container fluid>
        <div className="flex">
        <h6><Badge pill bg="light" text="dark" className="mx-4 my-2">Results: 1 - 10 of </Badge></h6>
        <PageNav />
        </div>
        <Movie resultsProp="Results: 1 - 10 of " inputValue={inputValue} />
        <PageNav />
      </Container>
    </>
  );
};

export default Home;
