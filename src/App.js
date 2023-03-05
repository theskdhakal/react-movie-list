import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";
import { Display } from "./components/Display";
import { useState } from "react";
// import { CustomCard } from "./components/CustomCard";

function App() {
  const [movieList, setMovieList] = useState([]);
  const addMovie = (data) => {
    setMovieList([...movieList, data]);
    console.log(movieList);
  };

  const movieMoodSwitcher = (imdbID, mood) => {
    const tempArg = movieList.map((item) => {
      if (item.imdbID === imdbID) {
        item.mood = mood;
      }
      return item;
    });
    setMovieList(tempArg);
  };
  return (
    <div className="wrapper bg-dark">
      <Container>
        {/*title*/}
        <Row>
          <Col>
            <h1 className="mt-5 text-center text-warning">
              My Movie collection
            </h1>
          </Col>
        </Row>
        <hr />

        {/*form*/}
        <SearchForm addMovie={addMovie} />

        {/*Display*/}
        <Display movieMoodSwitcher={movieMoodSwitcher} />
      </Container>
    </div>
  );
}

export default App;
