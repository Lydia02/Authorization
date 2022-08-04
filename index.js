// creating an express server
// connect to mongodb
// initialise express
// initialise express middleware

//create a simple get request Route(optional)
//Inject our routes
// Listen to our app connection

const express = require('express');
const connectDB  = require('./db/app');
require('dotenv').config(); //allow us to use the environment variables in .env
const { PORT } = process.env

//Connect to db
connectDB();

// Initialise express
const app = express();

// Intialise Express middleware

app.use(express.json({extended: false}));
//create a basic express route

app.get('/', (req, res) => res.json({message: 'Hello world!'}));

//PORT

const port = process.env.PORT || PORT
//Listen to connection
app.listen(port,() =>console.log(`Serving running on port ${port}`));
