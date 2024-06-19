var Q = require('q');
const projecstDao = require('../dao/projects.dao');
require('dotenv').config();

/**
 * @author: Harshada Jadhav
 * @description: POST add project details.
 * @param: {} req.param will contain nothing.
 * @return: {object} res will contain a message, statusCode, error (i.e true or false) and result (data, count, page etc).
 */

 exports.addProjectDetails = async function (body) {
    var deferred = Q.defer();

    projecstDao.addProjectDetails(body).then(function(result) {
        console.log(result);
        
        let responseBody;

        if (result.error) {

            responseBody = {
                message: 'An error occured while adding project details',
                error: true,
                errorMessage: result.error.message,
                statusCode: 400
            }

            deferred.resolve(responseBody);
        } else {

            responseBody = {
                message: 'success',
                error: false,
                statusCode: 200,
                result: {
                    data: result.data
                }
            }

            deferred.resolve(responseBody);
        }
    }).catch(function(err) {
        console.log(err);
        deferred.reject(err);
    });

    return deferred.promise; 
 }

 /**
 * @author: Harshada Jadhav
 * @description: POST add project details.
 * @param: {} req.param will contain nothing.
 * @return: {object} res will contain a message, statusCode, error (i.e true or false) and result (data, count, page etc).
 */

  exports.getAllProjectDetails = async function (body) {
    var deferred = Q.defer();

    projecstDao.getAllProjectDetails(body).then(function(result) {
        console.log(result);
        
        let responseBody;

        if (result.error) {

            responseBody = {
                message: 'An error occured while fetching project details',
                error: true,
                errorMessage: result.error.message,
                statusCode: 400
            }

            deferred.resolve(responseBody);
        } else {

            responseBody = {
                message: 'success',
                error: false,
                statusCode: 200,
                result: {
                    data: result.data
                }
            }

            deferred.resolve(responseBody);
        }
    }).catch(function(err) {
        console.log(err);
        deferred.reject(err);
    });

    return deferred.promise; 
 }

/**
 * @author:Harshada Jadhav
 * @description: PUT update project details.
 * @param: {string} req.param will contain project id.
 * @return: {object} res will contain a message, statusCode, error (i.e true or false) and result (data, count, page etc).
 */

  exports.updateProjectDetails = async function (projectId, body) {
    var deferred = Q.defer();

    projecstDao.updateProjectDetails(projectId, body).then(function(result) {
        console.log(result);
        
        let responseBody;

        if (result.error) {

            responseBody = {
                message: 'An error occured while updating project details',
                error: true,
                errorMessage: result.error.message,
                statusCode: 400
            }

            deferred.resolve(responseBody);
        } else {

            responseBody = {
                message: 'success',
                error: false,
                statusCode: 200,
                result: {
                    data: result.data
                }
            }

            deferred.resolve(responseBody);
        }
    }).catch(function(err) {
        console.log(err);
        deferred.reject(err);
    });

    return deferred.promise; 
 }


/**
 * @author:Harshada Jadhav
 * @description: DELETE project details.
 * @param: {} req.param will contain nothing.
 * @return: {object} res will contain a message, statusCode, error (i.e true or false) and result (data, count, page etc).
 */

  exports.deleteProjectDetails = async function (projectId) {
    var deferred = Q.defer();

    projecstDao.deleteProjectDetails(projectId).then(function(result) {
        console.log(result);
        
        let responseBody;

        if (result.error) {

            responseBody = {
                message: 'An error occured while deleting project details',
                error: true,
                errorMessage: result.error.message,
                statusCode: 400
            }

            deferred.resolve(responseBody);
        } else {

            responseBody = {
                message: 'success',
                error: false,
                statusCode: 200,
                result: {
                    data: result.data
                }
            }

            deferred.resolve(responseBody);
        }
    }).catch(function(err) {
        console.log(err);
        deferred.reject(err);
    });

    return deferred.promise; 
 }