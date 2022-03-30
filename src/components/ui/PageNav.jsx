import { Pagination } from "react-bootstrap";

const PageNav = () => {
  return (
    <Pagination className="mx-4">
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
};

export default PageNav;
