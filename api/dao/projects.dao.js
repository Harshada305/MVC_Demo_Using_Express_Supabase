var Q = require('q');
require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

exports.addProjectDetails = function (body) {
    var deferred = Q.defer();

    console.log('Inside addProjectDetails Dao');

    supabase
        .from('projects')
        .insert(body)
        .then(function(response) {
            console.log(response);
            if (response.error == null) {
                deferred.resolve(response);
            } else {
                deferred.resolve(response);
            }
        })
        .catch(function(err) {
            console.log(err);
            winston.error('Error in addProjectDetails dao', err);
            deferred.reject(err);
        })

    return deferred.promise;
}

exports.getAllProjectDetails = function () {
    var deferred = Q.defer();

    console.log('Inside getAllProjectDetails Dao');

    supabase
        .from('projects')
        .select('*')
        .then(function(response) {
            console.log(response);
            if (response.error == null) {
                deferred.resolve(response);
            } else {
                deferred.resolve(response);
            }
        })
        .catch(function(err) {
            console.log(err);
            winston.error('Error in getAllProjectDetails dao', err);
            deferred.reject(err);
        })

    return deferred.promise;
}

exports.updateProjectDetails = function (projectId, body) {
    var deferred = Q.defer();

    console.log('Inside updateProjectDetails Dao');

    supabase
        .from('projects')
        .update(body)
        .match({
            project_id: projectId
        })
        .then(function(response) {
            console.log(response);
            if (response.error == null) {
                deferred.resolve(response);
            } else {
                deferred.resolve(response);
            }
        })
        .catch(function(err) {
            console.log(err);
            winston.error('Error in updateProjectDetails dao', err);
            deferred.reject(err);
        })

    return deferred.promise;
}

exports.deleteProjectDetails = function (projectId) {
    var deferred = Q.defer();

    console.log('Inside deleteProjectDetails Dao');

    supabase
        .from('projects')
        .delete()
        .match({
            project_id: projectId
        })
        .then(function(response) {
            console.log(response);
            if (response.error == null) {
                deferred.resolve(response);
            } else {
                deferred.resolve(response);
            }
        })
        .catch(function(err) {
            console.log(err);
            winston.error('Error in deleteProjectDetails dao', err);
            deferred.reject(err);
        })

    return deferred.promise;
}