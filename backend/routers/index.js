const foodRouter = require('./foodRoute') 
const cartRouter = require('./cartRoute') 

function route(app) {
    app.use('/food', foodRouter)
    app.use('/cart', cartRouter)
}

module.exports = route
