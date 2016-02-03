/*
*  Usage:
*  
*  1) Change myModuleName to your choice
*  2) Fill in you own states
*  3) Update/rename demo states and controllers
*
*/
"use strict";

angular.module('myModuleName').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    var states = [
    {
        name: 'start',
        config: {
            url: "/",
            template: "<div ui-view>Please select your card.</div> "
        }
    }, 
    {
        name: 'start.s1',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s2',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s3',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s4',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s5',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s6',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s7',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s8',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s9',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s10',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s11',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s12',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s13',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s14',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s15',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s16',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s17',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s18',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
    {
        name: 'start.s19',
        config: {
            url: "demo",
            templateUrl: "app/views/demoView.html",
            controller: 'demoController'
        }
    },
      

    ]

    states.forEach(function(state) {
        $stateProvider.state(state.name, state.config);
    });

    $urlRouterProvider.otherwise("/");
}]);
