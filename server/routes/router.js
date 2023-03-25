const userRouter = require('./user.routes.js')
const homeRouter = require('./home.routes.js')

function route (app) {
    app.use('/user', userRouter);
    app.use('/', homeRouter);
}


module.exports = route