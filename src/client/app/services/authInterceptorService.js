"use strict";

app
    .factory("authInterceptorService", ['$injector', '$rootScope', '$location', authService])

function authService($injector, $rootScope, $location, localStorageService, consoleService) {

    var quest = {};

    var _request = function(config) {
        config.headers = {
            'Content-Type': 'application/json'
        }
        return config;
    }
    quest.request = _request;

    return quest;

}
