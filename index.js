const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');       // nodejs module
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const route = require('./server/routes/router');
const connectDB = require('./server/configs/db.connect');

// variables environment config
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 3000; 

// HTTP logger
app.use(morgan('tiny'));

// connect database
connectDB();

// parser request
app.use(bodyParser.urlencoded({ extended: true }))

// Set view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// set static files
app.use(express.static(path.join(__dirname, 'assets')))

// route init
route(app)

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
