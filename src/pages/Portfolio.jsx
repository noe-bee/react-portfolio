import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Card from '../components/Card'


export default function Portfolio() {
    return (
      <>
        <h1>Portfolio Page</h1>
        <p>
        Here are previews of some of my works I've created! From creating simple applications to more complicated ones that require backend databases, you'll be able to find that I have signicantly grown my knowledge and skills throughout these past months.
        </p>
        <Container>
          <Row>
          <Card/>
          <Card/>
          </Row>
        </Container>
      </>
    );
  }