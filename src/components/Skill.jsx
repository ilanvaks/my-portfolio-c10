import { Container, Row, Col } from "react-bootstrap";

export default function Skill () {

  return (
    <section>
      <Container>
        <Row>
            <Col className="text-center">
            <h2>Skills that pay the bills</h2>
            </Col>
            </Row>

            <Row>
            <Col>
            <ul>
              <li> React.js</li>
              <li>JavaScript.js</li>
              <li>Node.js</li>
            </ul>
            </Col>
          
        </Row>
      </Container>
    </section>
  )
}