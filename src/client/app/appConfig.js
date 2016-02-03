"use strict";

app
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;        
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
    .run(['$rootScope', function($rootScope) {
        //enter code for initial $rootScope manipulation here

    }]);
