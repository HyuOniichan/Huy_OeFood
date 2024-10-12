import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CartCheckout({ total }) {
    return (
        <div className="position-relative">
            <Card className="position-fixed mt-0 pb-2" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Bill</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className="d-flex flex-row justify-content-between">
                        <Card.Text className="m-0">Subtotal: </Card.Text>
                        <Card.Text className="m-0">{total}.000VND</Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex flex-row justify-content-between">
                        <Card.Text className="m-0">Delivery: </Card.Text>
                        <Card.Text className="m-0">0VND</Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex flex-row justify-content-between">
                        <Card.Subtitle className="my-1">Total: </Card.Subtitle>
                        <Card.Subtitle className="my-1">{total}.000VND</Card.Subtitle>
                    </ListGroup.Item>
                </ListGroup>
                <Button variant="success" className="m-2">Checkout</Button>
                <Card.Text className="mx-2">If you 'Checkout', you agree with our Privacy Policy and Terms of Service.</Card.Text>
            </Card>
        </div>
    );
}

export default CartCheckout;