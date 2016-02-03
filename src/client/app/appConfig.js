"use strict";

app
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        //$httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
        //$httpProvider.defaults.headers.common["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, PUT";
        // $httpProvider.defaults.headers.common["Access-Control-Allow-headers"] = "accept, origin, content-type, accept, x-requested-with, sid, mycustom, smuser";
        // $httpProvider.defaults.headers.common["Accept"] = "application/json";
        // $httpProvider.defaults.headers.common = 'Content-Type: application/json;charset=utf-8';
        // $httpProvider.defaults.headers.common = 'x-content-type-options: nosniff';
        // $httpProvider.defaults.headers.common = "Access-Control-Allow-Origin: '*'";
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
    .run(['$rootScope', function($rootScope) {
        //enter code for initial $rootScope manipulation here

    }]);
