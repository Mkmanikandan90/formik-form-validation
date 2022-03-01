import "./styles.css";
import SignupForm from "./components/registerForm";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Form Validataion</h1>
      </div>
      <Container>
        <Row>
          <SignupForm />
        </Row>
      </Container>
    </>
  );
}
