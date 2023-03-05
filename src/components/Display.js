import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CustomCard } from "./CustomCard";

export const Display = ({ movieList, movieMoodSwitcher }) => {
  // const happyMood = movieList.filter((item) => item.mood === "happy");
  // const lazyMood = movieList.filter((item) => item.mood === "lazy");
  return (
    <div className="bg-black p-5 rounded shadow-lg mt-5">
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">Left</Button>
          <Button variant="warning">Middle</Button>
          <Button variant="info">Right</Button>
        </ButtonGroup>
      </div>

      <div className="py-3 text-secondary">0 Movies found</div>
      <hr />

      <Row>
        <Col>
          <CustomCard />
        </Col>
      </Row>
    </div>
  );
};
