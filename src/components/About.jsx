import { Container, Row, Col} from "react-bootstrap";

export default function About () {

  return (
    <section>
      <Container className="bg-danger">
        <Row>
          <Col>
            <img src="https://picsum.photos/300/300"
            alt="profile pict"/>
          </Col>

          <Col>
          <h1>Hi I am Ilan Vaks</h1>
          <p> I am a software engineer located in south Florida.  I love javascript and typeScript.</p>
          </Col>
    </Row>
    </Container>
    </section>
  )
}