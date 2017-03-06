var myApp = angular.module('myApp', []);

myApp.controller('hierarchyController', ['$scope',function($scope) {

	//Function to Make A Family Hierarchy Tree
	var getHierarchy = function() {

		// Array Containing Family Hierarchy Tree Nodes
		var treeElements = [
			{
				id		: 	'parent',
				parent	:	'null',
				level	: 	 0
			}
		];

		//Loop to check parent of Elements inside the treeElements Array
		for(i=0;i<treeElements.length;i++) {
			if(treeElements[i].parent == 'null' && treeElements[i].level == 0) {
				//Parent Node is Created Dynamically
				document.getElementById('hierarchyContainer').innerHTML = '<li><a href="#">'+treeElements[i].id+'</a></li>';
			}
		}
	}

	//Bydefault Call to Get Family Hierarchy Tree
	getHierarchy();
}])