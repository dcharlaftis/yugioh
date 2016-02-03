"use strict";

app.controller("demoController", ['$scope', 'scopeComService', 'cardDataService', 'cardImageService',
    function($scope, scopeComService, cardDataService, cardImageService) {

        $scope.cardName = scopeComService.list[0];
        scopeComService.flush();
        //console.log ("ffcc",$scope.cardName);

        //card info
        cardDataService.getOne({
                id: $scope.cardName
            }, function(response) {
                console.log("rrr", response);
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
                console.log("imm", response);
                $scope.cardImage = response;
            },
            function(response) {
                console.log("error 2-->", response)
            });



    }
]);
