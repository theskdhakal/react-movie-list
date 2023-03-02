import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ searchedMovies }) => {
  return (
    <div>
      <Card style={{ width: "18rem", color: "black" }}>
        <Card.Img variant="top" src={searchedMovies?.Poster} />
        <Card.Body>
          <Card.Title>{searchedMovies?.Title}</Card.Title>
          <Card.Text>{searchedMovies?.Plot}</Card.Text>
          <Card.Text>{searchedMovies?.imdbRating}</Card.Text>
          <Card.Text>{searchedMovies?.Released}</Card.Text>

          <div className="d-flex justify-content-between">
            <Button variant="warning">Happy</Button>
            <Button variant="info">Lazy</Button>
          </div>
          <div className="d-grid mt-3">
            <Button variant="danger">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
