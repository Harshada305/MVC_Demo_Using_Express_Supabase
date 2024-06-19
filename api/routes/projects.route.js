const express = require('express');
const { projectsController } = require('../controllers/index');

const projectsRoute = express.Router({});

projectsRoute.post('/addProjectDetails', projectsController.addProjectDetails);
projectsRoute.get('/getAllProjectDetails' ,projectsController.getAllProjectDetails);
projectsRoute.put('/updateProjectDetails/:projectId' ,projectsController.updateProjectDetails);
projectsRoute.delete('/deleteProjectDetails/:projectId' ,projectsController.deleteProjectDetails);

module.exports = projectsRoute;