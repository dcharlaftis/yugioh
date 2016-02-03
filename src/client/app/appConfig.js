"use strict";

app
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
    }])
    .run(['$rootScope', function($rootScope ) {
      //enter code for initial $rootScope manipulation here
       
    }]);
