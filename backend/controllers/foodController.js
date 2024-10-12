const foodData = require('../models/foodModel')

class foodController {
    // [GET] /food
    show(req, res, next) {
        foodData.find({})
            .then(data => res.json(data))
            .catch(next)
    }

    // [POST] /food
    create(req, res, next) {
        foodData.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }

    // [DELETE] /food/:id 
    delete(req, res, next) {
        foodData.findByIdAndDelete(req.params.id)
            .then(() => res.json({ "msg": "done" }))
            .catch(next)
    }

    // [PUT] /food/:id
    update(req, res, next) {
        foodData.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(() => res.json({ "msg": "done" }))
            .catch(next)
    }
}

module.exports = new foodController() 
