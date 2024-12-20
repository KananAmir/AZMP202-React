import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Col from "./components/Grid/Col";
import Container from "./components/Grid/Container";
import Row from "./components/Grid/Row";
import Input from "./components/Input";
import Header from "./layouts/Header";

import { styles } from "./styles";
// styling in

//inline css
//normal css
//scss
//module css (module scss)
//css in js (styled components)
//ui kits (react bootstrap, antd, tailwind, mui, chackra ui ..)
function App() {
  return (
    <>
      <Header />
      <div style={styles.Container}>
        <Card />
        <hr />
        <Button />
        <hr />
        <button className="btn">Click</button>
        <Input labelText={"user name"} type={"text"} />
        <Input labelText={"email"} type={"email"} />
        <Input labelText={"password"} type={"password"} />
        <hr />
        <Contact />
      </div>

      <hr />
      <h2>GRID</h2>

      <Container>
        <Row>
          <Col size={6}>
            <p style={{ backgroundColor: "red" }}>lorem</p>
          </Col>
          <Col size={6}>
            <p style={{ backgroundColor: "green" }}>lorem</p>
          </Col>
        </Row>
        <Row>
          <Col size={4}>
            <p style={{ backgroundColor: "red" }}>lorem</p>
          </Col>
          <Col size={4}>
            <p style={{ backgroundColor: "green" }}>lorem</p>
          </Col>
          <Col size={4}>
            <p style={{ backgroundColor: "green" }}>lorem</p>
          </Col>
        </Row>

        <Row>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
