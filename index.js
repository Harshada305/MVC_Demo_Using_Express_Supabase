const express = require('express');
const app = express();
require('dotenv').config();

const apiRoutes = require('./api/routes/index');

app.use(express.json());

app.use(apiRoutes);

const server = app.listen(process.env.PORT, function() {
    console.log('Server is listening at http://' + server.address().address + ':' + server.address().port);

});
console.log(server);