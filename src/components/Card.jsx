import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../styles/Card.css';
import Row from 'react-bootstrap/Row';


function MultiCard() {
  return (
    <CardGroup>
      <Card style={{ margin: '2rem' }}>
        <Card.Img variant="top" src="src/assets/placeholder-500x500.jpg" />
        <Card.Body style={{border: '2px dotted'}}>
          <Card.Title className="text-primary">Ease</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a className="text-primary" href="#">Click For Live App!</a>
        </Card.Footer>
      </Card>

      <Card style={{ margin: '2rem' }}>
        <Card.Img variant="top" src="src/assets/placeholder-500x500.jpg" />
        <Card.Body style={{border: '2px dotted'}}>
          <Card.Title className="text-primary">Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a className="text-primary" href="#">Click For Live App!</a>
        </Card.Footer>
      </Card>

      <Card style={{ margin: '2rem' }}>
        <Card.Img variant="top" src="src/assets/placeholder-500x500.jpg" />
        <Card.Body style={{border: '2px dotted'}}>
          <Card.Title className="text-primary">Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a className="text-primary" href="#">Click For Live App!</a>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default MultiCard;
