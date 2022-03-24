const express = require('express');
const router = require('./routes');

// Loading env file
require('dotenv-flow').config();

// Config variable
const { PORT, NODE_ENV} = process.env; 

// init serv
const app = express();
// Add un middleware pour  gerer les données JSON réçu dans le body
app.use(express.json());

// Add routing
app.use('/api/v1', router);

// Start serv
app.listen(PORT, () => {
    console.log(`Welcome in my moie server on ${ PORT} [${NODE_ENV}]`);
});
