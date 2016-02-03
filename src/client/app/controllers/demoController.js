/* Usage:
 *  1) Rename demoController to your choice.
 *  2) Update appRouter with the new controller name 
 */

"use strict";

app.controller("demoController", ['$scope', 'scopeComService', function($scope, scopeComService) {
    
    /* Enter your code here
     * 
     */
    $scope.cardName = scopeComService.list[0];
    scopeComService.flush();
    console.log ("ffcc",$scope.cardName);

}]);
