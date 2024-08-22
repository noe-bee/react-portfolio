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
            A fully functioning chat app with a seamless UI which allows the user to chat with others. After creating an account, users can add others as friends!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a className="text-primary" href="https://chat-test-bquw.onrender.com">Click For Live App!</a>
        </Card.Footer>
      </Card>

      <Card style={{ margin: '2rem' }}>
        <Card.Img variant="top" src="src/assets/placeholder-500x500.jpg" />
        <Card.Body style={{border: '2px dotted'}}>
          <Card.Title className="text-primary">Weather Dashbaord</Card.Title>
          <Card.Text>
           A weather dashboard app featuring the use of an api for accurate weather data anywhere you can think of for up to the next 5 days!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a className="text-primary" href="https://noe-bee.github.io/weather-dashboard/">Click For Live App!</a>
        </Card.Footer>
      </Card>

      <Card style={{ margin: '2rem' }}>
        <Card.Img variant="top" src="src/assets/placeholder-500x500.jpg" />
        <Card.Body style={{border: '2px dotted'}}>
          <Card.Title className="text-primary">WorkDay Scheduler</Card.Title>
          <Card.Text>
            A simple, yet useful app that allows you to note your tasks for a typical 9-5 workday. This app saves your past, current, and future tasks for the day!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a className="text-primary" href="https://noe-bee.github.io/workday-scheduler/">Click For Live App!</a>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default MultiCard;
