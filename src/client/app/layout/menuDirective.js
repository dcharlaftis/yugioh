	"use strict";
	
  app.directive('menu2', ['$location', 'scopeComService', function ($location, scopeComService){
		return {
			restrict: 'EA',
			templateUrl: 'app/layout/views/sidebarView.html',	
			link: function ($scope) {
				
				$scope.f1 = function(){
					scopeComService.add("Burial from a Different Dimension");
				}	
				$scope.f2 = function(){
					scopeComService.add("Charge of the Light Brigade");
				}	
				$scope.f3 = function(){
					scopeComService.add("Infernoid Antra");
				}	
				$scope.f4 = function(){
					scopeComService.add("Infernoid Attondel");
				}	
				$scope.f5 = function(){
					scopeComService.add("Infernoid Decatron");
				}	
				$scope.f6 = function(){
					scopeComService.add("Infernoid Devyaty");
				}	
				$scope.f7 = function(){
					scopeComService.add("Infernoid Harmadik");
				}	
				$scope.f8 = function(){
					scopeComService.add("Infernoid Onuncu");
				}	
				$scope.f9 = function(){
					scopeComService.add("Infernoid Patrulea");
				}	
				$scope.f10 = function(){
					scopeComService.add("Infernoid Pirmais");
				}	
				$scope.f11 = function(){
					scopeComService.add("Infernoid Seitsemas");
				}	
				$scope.f12 = function(){
					scopeComService.add("Lyla, Lightsworn Sorceress");
				}	
				$scope.f13 = function(){
					scopeComService.add("Monster Gate");
				}	
				$scope.f14 = function(){
					scopeComService.add("One for One");
				}	
				$scope.f15 = function(){
					scopeComService.add("Reasoning");
				}	
				$scope.f16 = function(){
					scopeComService.add("Time-Space Trap Hole");
				}	
				$scope.f17 = function(){
					scopeComService.add("Torrential Tribute");
				}	
				$scope.f18 = function(){
					scopeComService.add("Upstart Goblin");
				}	
				$scope.f19 = function(){
					scopeComService.add("Void Seer");
				}	

    		}			 
		};
	}]);
	
 