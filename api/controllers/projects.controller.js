const projectsService = require('../services/projects.service');

/**
 * @author: Harshada Jadhav
 * @description: POST add project details.
 * @param: {} req.param will contain nothing.
 * @return: {object} res will contain a message, statusCode, error (i.e true or false) and result (data, count, page etc).
 */

 function addProjectDetails(req, res) {
    console.log('Inside addProjectDetails controller');

    var body = req.body;
    console.log(body);

    projectsService.addProjectDetails(body).then(function(result) {
        res.status(result.statusCode).send(result);
    }).catch(function (err) {
        console.log('Error in addProjectDetails controller', err);
        res.status(500).send({
            message: 'Something went wrong!',
            error: true
        });
    });
}

/**
 * @author: Harshada Jadhav
 * @description: GET get all project details.
 * @param: {} req.param will contain nothing.
 * @return: {object} res will contain a message, statusCode, error (i.e true or false) and result (data, count, page etc).
 */

 function getAllProjectDetails(req, res) {
    console.log('Inside getAllProjectDetails controller');

    projectsService.getAllProjectDetails().then(function(result) {
        res.status(result.statusCode).send(result);
    }).catch(function (err) {
        console.log('Error in getAllProjectDetails controller', err);
        res.status(500).send({
            message: 'Something went wrong!',
            error: true
        });
    });
}

/**
 * @author: Harshada Jadhav
 * @description: PUT update project details.
 * @param: {string} req.param will contain project id.
 * @return: {object} res will contain a message, statusCode, error (i.e true or false) and result (data, count, page etc).
 */

 function updateProjectDetails(req, res) {
    console.log('Inside updateProjectDetails controller');

    var projectId = req.params.projectId;
    var body = req.body;

    projectsService.updateProjectDetails(projectId, body).then(function(result) {
        res.status(result.statusCode).send(result);
    }).catch(function (err) {
        console.log('Error in updateProjectDetails controller', err);
        res.status(500).send({
            message: 'Something went wrong!',
            error: true
        });
    });
}

/**
 * @author: Harshada Jadhav
 * @description: DELETE project details.
 * @param: {} req.param will contain nothing.
 * @return: {object} res will contain a message, statusCode, error (i.e true or false) and result (data, count, page etc).
 */

 function deleteProjectDetails(req, res) {
    console.log('Inside deleteProjectDetails controller');

    var projectId = req.params.projectId;

    projectsService.deleteProjectDetails(projectId).then(function(result) {
        res.status(result.statusCode).send(result);
    }).catch(function (err) {
        console.log('Error in deleteProjectDetails controller', err);
        res.status(500).send({
            message: 'Something went wrong!',
            error: true
        });
    });
}

module.exports = {
    addProjectDetails,
    getAllProjectDetails,
    updateProjectDetails,
    deleteProjectDetails
}