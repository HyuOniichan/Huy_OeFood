import { useState, useContext } from "react";

import { MenuContext } from "../App";

function CartItem({ data, handleTotal, subtotal }) {

    const [menu, setMenu] = useContext(MenuContext)
    const [qty, setQty] = useState(0);

    function handleQtyInc() {
        setQty(qty + 1);
        handleTotal(subtotal + data.price);
    }

    function handleQtyDec() {
        if (qty > 0) {
            setQty(qty - 1);
            handleTotal(subtotal - data.price);
        }
    }

    function handleRemoveCart(e) {
        e.preventDefault()
        data.cart = false 
        
        // handleTotal(subtotal - data.price * qty)
        setQty(0) 
        handleTotal(0)

        const changeId = menu.findIndex(e => e._id === data._id) 
        menu[changeId].cart = false
        setMenu(menu) 
        
        fetch(`https://oefood.onrender.com/food/${data._id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
            .then(() => console.log('Success'))
            .catch(err => console.log(err))

    }

    return (
        <div className="card d-flex flex-row" style={{ width: 760, height: 200 }}>
            <img src={'/images/food/' + data.thumbnail} className="img-fluid rounded-0 rounded-start" style={{ width: 200, objectFit: 'cover' }} alt="thumbnail" />
            <div className="card-body position-relative">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-subtitle">{data.description}</p>
                <div className="d-flex flex-row position-absolute bottom-0 start-0 ms-3 gap-3 py-1 align-items-center">
                    <h6 className="card-text my-1">Quantity</h6>
                    <div className="d-flex flex-row border rounded gap-3" style={{ height: 30 }}>
                        <button onClick={handleQtyDec} className="btn btn-light pt-0">-</button>
                        <div>{qty}</div>
                        <button onClick={handleQtyInc} className="btn btn-light pt-0">+</button>
                    </div>
                    <h6 className="card-text my-1 ms-4">Price: </h6>
                    <p className="card-text my-1 text-secondary">{data.price}k</p>
                    <h6 className="card-text my-1 ms-4">Subtotal: </h6>
                    <p className="card-text my-1">{data.price * qty}k</p>
                </div>
                <button
                    onClick={e => handleRemoveCart(e)}
                    type="button"
                    className="btn-close position-absolute top-0 end-0 mt-2 me-2" aria-label="Close"
                ></button>
            </div>
        </div>
    )
}

export default CartItem; 
