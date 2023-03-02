import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";
import { Display } from "./components/Display";
// import { CustomCard } from "./components/CustomCard";

function App() {
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
        <SearchForm />

        {/*Display*/}
        <Display />
      </Container>
    </div>
  );
}

export default App;
