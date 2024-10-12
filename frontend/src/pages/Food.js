import FoodMenu from "../components/FoodMenu";
import FoodMenuCreate from "../components/FoodMenuCreate"; 

function Food() {
    return (
        <div className="py-3 px-4">
            <FoodMenuCreate /> 
            <FoodMenu />
        </div>
    );
}

export default Food; 
