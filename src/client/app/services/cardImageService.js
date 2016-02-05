
 "use strict";

 app
  .factory("cardImageService", ["$resource", "appSettings", cardImageService])

function cardImageService($resource, appSettings ) {
  return $resource(appSettings.serverPath + 'card_image/:id', {}, {
     
    getOne: {
      method: 'GET',
      params: { id: '@id' }
    }
  });
}