"use strict";

app.controller("demoController", ['$http', '$scope', 'scopeComService', 'cardDataService', 'cardImageService',
    function($http, $scope, scopeComService, cardDataService, cardImageService) {

        $scope.cardName = scopeComService.list[0];
        scopeComService.flush();
        $scope.cardPath= "http://yugiohprices.com/api/card_image/" + $scope.cardName;
        /*
        $http.get("http://yugiohprices.com/api/card_data/Reasoning")
            .then(function(response) {
                console.log("fffffft", response);
            });

        */
        //card info
        cardDataService.getOne({
                id: $scope.cardName
            }, function(response) {
                $scope.cardType = response.data.card_type;
                $scope.cardDescription = response.data.text;
            },
            function(response) {
                console.log("error -->", response)
            });

        //card image
        cardImageService.getOne({
                id: $scope.cardName
            }, function(response) {               
                $scope.cardImage = response;
            },
            function(response) {
                console.log("error 2-->", response)
            });


    }
]);
