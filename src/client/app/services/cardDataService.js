

 "use strict";

 app
  .factory("cardDataService", ["$resource", cardDataService])

function cardDataService($resource ) {
  return $resource('http://yugiohprices.com/api/card_data/:id', {}, {
     
    getOne: {
      method: 'GET',
      params: { id: '@id' }
    }
  });
}