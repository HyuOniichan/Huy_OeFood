import { useEffect, useContext } from "react";

import FoodMenuItem from "./FoodMenuItem";
import { MenuContext } from "../App"

function FoodMenu() {

    const [menu, setMenu] = useContext(MenuContext)

    useEffect(() => {
        fetch('https://oefood.onrender.com/food')
            .then(res => res.json())
            .then(data => setMenu(data))
            .catch(err => console.log(err))
    }, [menu, setMenu])

    return (
        <div className='d-flex flex-row flex-wrap gap-3'>
            {menu && menu.map((card, index) => <FoodMenuItem
                data={card}
                key={index}
            />)}
        </div>
    );
}

export default FoodMenu; 
