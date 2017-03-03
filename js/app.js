var myApp = angular.module('myApp', []);

myApp.controller('hierarchyController', ['$scope',function($scope) {
	$scope.createChild = function(event) {
		var id = event.target.id;
		console.log(id);
	}
}])