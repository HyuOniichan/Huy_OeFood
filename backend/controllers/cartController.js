const foodData = require('../models/foodModel')

class cartController {
    // [GET] /cart
    showCart(req, res, next) {
        foodData.find({ cart: true })
            .then(data => res.json(data))
            .catch(next)
    }
}

module.exports = new cartController() 
