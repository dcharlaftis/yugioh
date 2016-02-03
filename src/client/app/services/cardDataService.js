

 "use strict";

 app
  .factory("cardDataService", ["$resource", cardDataService])

function cardDataService($resource, appSettings ) {
  return $resource('http://yugiohprices.com/api/card_data/:id', {}, {
  //  return $resource('http://private-anon-71ea0a0bd-yugiohprices.apiary-proxy.com/api/card_data', {}, {
   //  return $resource('http://private-anon-71ea0a0bd-yugiohprices.apiary-mock.com/api/card_data', {}, {
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