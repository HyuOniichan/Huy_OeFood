import { useState } from "react";

import CartList from "../components/CartList";
import CartCheckout from "../components/CartCheckout";

function Cart() {

    const [total, setTotal] = useState(0); 

    return (
        <div className="p-4 d-flex flex-row justify-content-around" style={{ maxWidth: 1200 }}>
            <CartList handleTotal={setTotal} subtotal={total} /> 
            <CartCheckout total={total} /> 
        </div>
    )
}

export default Cart; 
