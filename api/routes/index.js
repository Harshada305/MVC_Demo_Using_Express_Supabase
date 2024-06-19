const express = require('express');
const apiRoutes = express.Router();

const projectsRoute = require('./projects.route');

apiRoutes.use('/api/projects', projectsRoute);

module.exports = apiRoutes;