import { useContext } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

import { MenuContext } from '../App'

function FoodMenuItem({ data }) {

    const [menu, setMenu] = useContext(MenuContext) 

    function handleDelete() {
        fetch(`http://localhost:4004/food/${data._id}`, { method: 'DELETE' })
            .then(() => console.log('Deleted'))
            .catch(err => console.log(err))
        
        setMenu(menu.filter(food => food._id !== data._id))
    }

    function handleUpdateCart(e) {
        e.preventDefault() 
        data.cart = !data.cart; 

        const changeId = menu.findIndex(e => e._id === data._id) 
        menu[changeId].cart = data.cart
        setMenu(menu) 
        
        fetch(`http://localhost:4004/food/${data._id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
            .then(() => console.log("done"))
            .catch(err => console.log(err))

        
    }

    return (
        <div>
            <Card className="position-relative" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={'/images/food/' + data.thumbnail} style={{ height: 200 }} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text className="mb-1">{data.description}</Card.Text>
                    <Stack direction="horizontal" gap={2}>
                        {data.tags && data.tags.map((tag, index) => <Badge bg="info" key={index}>{tag.tag}</Badge>)}
                    </Stack>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>From: {data.address}</ListGroup.Item>
                    <ListGroup.Item>Price: {data.price}k vnd</ListGroup.Item>
                </ListGroup>
                {
                    data.cart ?
                        <Button variant="danger" onClick={e => handleUpdateCart(e)} id={data._id}>Remove from cart</Button> :
                        <Button variant="primary" onClick={e => handleUpdateCart(e)} id={data._id}>Add to cart</Button>
                }
                <button
                    type="button"
                    onClick={handleDelete}
                    className="btn-close position-absolute top-0 end-0 mt-1 me-1 bg-white"
                    aria-label="Close"
                ></button>
            </Card>
        </div>
    );
}

export default FoodMenuItem; 
