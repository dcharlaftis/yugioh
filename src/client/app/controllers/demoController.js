/* Usage:
 *  1) Rename demoController to your choice.
 *  2) Update appRouter with the new controller name 
 */

"use strict";

app.controller("demoController", ['$scope', 'scopeComService', 'cardDataService',
    function($scope, scopeComService, cardDataService) {

        $scope.cardName = scopeComService.list[0];
        scopeComService.flush();
        //console.log ("ffcc",$scope.cardName);

        cardDataService.getOne({
                id: $scope.cardName
            }, function(response) {
                console.log("rrr", response);
            },
            function(response) {
                console.log("error -->", response)

                if (response.data == null) {
                    console.log("response data is null!!!!!");
                    $scope.alert = {
                        type: 'danger',
                        msg: 'No response from server'
                    };
                }

            });

    }
]);
