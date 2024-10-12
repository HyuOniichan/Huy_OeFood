const express = require('express') 
const router = express.Router() 

const foodController = require('../controllers/foodController')

router.delete(`/:id`, foodController.delete)
router.put(`/:id`, foodController.update)
router.get(`/`, foodController.show)
router.post(`/`, foodController.create)

module.exports = router 
