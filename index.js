const express = require('express');
const app = express();
var cors = require('cors');
 const { mongoose } = require('./config/db');
 const { routes } = require('./config/routes');
const port = 3001;

app.use(express.json());
app.use(cors())  

app.use('/', routes);

app.listen(port, () => {
    console.log('listening to port', port);
});


