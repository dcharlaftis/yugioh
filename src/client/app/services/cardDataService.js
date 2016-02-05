

 "use strict";

 app
  .factory("cardDataService", ["$resource", "appSettings", cardDataService])

function cardDataService($resource, appSettings ) {
  return $resource(appSettings.serverPath + 'card_data/:id', {}, {
     
    getOne: {
      method: 'GET',
      params: { id: '@id' }
    }
  });
}