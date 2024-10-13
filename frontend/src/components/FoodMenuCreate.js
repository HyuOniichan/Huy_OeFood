import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function FoodMenuCreate() {

    const [showForm, setShowForm] = useState(false)

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [address, setAddress] = useState('')
    const [tags, setTags] = useState('')
    const [img, setImg] = useState('')

    function toggleShowForm() {
        setShowForm(!showForm)
    }

    function handleCreate(e) {
        e.preventDefault()

        setName(name.trim())
        setTags(tags.trim())
        setImg(img.trim())

        const tagList = tags.split(',').map(e => ({ tag: e }))

        if (name) handleSave(tagList)
        else alert('Please complete the Name field')

    }

    function handleSave(tagList) {
        const newFood = {
            name: name,
            description: desc,
            price: price,
            address: address,
            tags: tagList,
            thumbnail: img,
        }

        console.log(newFood)

        fetch('https://oefood.onrender.com/food', {
            method: 'POST',
            body: JSON.stringify(newFood),
            headers: { "Content-Type": "application/json" }
        })
            .then(() => console.log('Success'))
            .catch(err => console.log(err))

    }

    return (
        <>
            <Button variant="primary" className="mb-3" onClick={toggleShowForm}>
                Add new dish to menu
            </Button>
            <Button variant="primary" className="mb-3 mx-3">
                <Link to='/cart' className="text-white link-underline link-underline-opacity-0">My cart</Link>
            </Button>
            {showForm && <Form className="mb-4" style={{ maxWidth: 500 }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="New food?" />
                    <Form.Label className="mt-2">Description</Form.Label>
                    <Form.Control onChange={e => setDesc(e.target.value)} type="text" placeholder="How about it?" />
                    <Form.Label className="mt-2">Price</Form.Label>
                    <Form.Control onChange={e => setPrice(e.target.value)} type="text" placeholder="k VND" />
                    <Form.Label className="mt-2">Address</Form.Label>
                    <Form.Control onChange={e => setAddress(e.target.value)} type="text" placeholder="somewhere in vn" />
                    <Form.Label className="mt-2">Tags</Form.Label>
                    <Form.Control onChange={e => setTags(e.target.value)} type="text" placeholder="split by commas" />
                    <Form.Label className="mt-2">Thumbnail</Form.Label>
                    <Form.Control onChange={e => setImg(e.target.value)} type="text" placeholder="local image" />
                </Form.Group>
                <Button onClick={e => handleCreate(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>}
        </>
    )
}

export default FoodMenuCreate;
