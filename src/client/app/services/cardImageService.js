
 "use strict";

 app
  .factory("cardImageService", ["$resource", cardImageService])

function cardImageService($resource ) {
  return $resource('http://yugiohprices.com/api/card_image665/:id', {}, {
     
    getOne: {
      method: 'GET',
      params: { id: '@id' }
    }
  });
}