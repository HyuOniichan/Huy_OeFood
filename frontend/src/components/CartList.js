import { useEffect, useContext } from 'react';

import CartItem from './CartItem';
import { MenuContext } from '../App';

function CartList({ handleTotal, subtotal }) {

    const [menu, setMenu] = useContext(MenuContext)

    useEffect(() => {
        fetch('http://localhost:4004/food')
            .then(res => res.json())
            .then(data => setMenu(data))
            .catch(err => console.log(err))
    }, [menu, setMenu])

    const cartList = menu.filter(e => e.cart)

    return (
        <div className="d-flex flex-column gap-4">
            {cartList.length? cartList.map((cartItem, index) => <CartItem
                data={cartItem}
                handleTotal={handleTotal}
                subtotal={subtotal}
                key={index}
            />) : 'Pick your order!'
            }
        </div>
    )
}

export default CartList; 
