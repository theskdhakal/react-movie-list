import React, { useRef, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CustomCard } from "./CustomCard";
import { fetchMovies } from "./FetchHelper";

export const SearchForm = () => {
  const strRef = useRef("");
  const [searchedMovies, setSearchedMovies] = useState({});
  const [error, setError] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    error && setError(false);
    const str = strRef.current.value;
    const data = await fetchMovies(str);
    if (data.Response === "True") {
      setSearchedMovies(data);
    } else {
      setError(true);
    }
    console.log(data);
  };

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <Form onSubmit={handleOnSubmit}>
        <Row className="gap-1">
          <Col md="9">
            <Form.Control ref={strRef} placeholder="Search my title" />
          </Col>
          <Col>
            <div className="d-grid">
              <Button variant="warning" type="submit">
                Search Movie
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      <div className="d-flex justify-content-center mt-5 text-center">
        {error ? (
          <Alert variant="danger">Movie not found!</Alert>
        ) : (
          <CustomCard searchedMovies={searchedMovies} />
        )}
      </div>
    </div>
  );
};
