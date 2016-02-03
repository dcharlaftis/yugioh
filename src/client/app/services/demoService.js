 /*
 *  Usage:
 *  1) rename demoService to your choice
 *  2) rename /demo/api/path/:id to the server's api path *
 *
 */

 "use strict";

 app
  .factory("demoService", ["$resource", "appSettings",  demoService])

function demoService($resource, appSettings ) {
  return $resource(appSettings.authServerPath + '/demo/api/path/:id', {}, {
    query: { 
      method: 'GET', 
      isArray: true ,
      params: { id: '' }
    },
    getOne: {
      method: 'GET',
      params: { id: '@id' }
    },
    add: {
      method: 'POST'
    },
    update: { 
      method: 'PUT',
      params: { id: '@id' }
    },
    partialUpdate: { 
      method: 'PATCH',
      params: { id: '@id' }
    },
    remove: { 
      method: 'DELETE',
      params: { id: '@id' }
    }
  });
}