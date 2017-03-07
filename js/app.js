var myApp = angular.module('myApp', []);

myApp.controller('hierarchyController', ['$scope',function($scope) {

	// Array Containing Family Hierarchy Tree Nodes
	var treeElements = [
		{
			id		: 	'Head_Office',
			parent	:	'null',
			level	: 	 0
		}
	];

	//Function to Add Nodes to the treeElements Array
	$scope.addNode = function(node){
		// if(node.parent == 'Head_Office') {
			var element = {
				id 		: node.name,
				parent 	: node.parent,
				level 	: 1
			}
		// }
		treeElements.push(element);
		console.log(treeElements);
		getHierarchy();
	};

	//Function to Make A Family Hierarchy Tree
	var getHierarchy = function() {

		//Loop to check parent of Elements inside the treeElements Array
		for(i=0;i<treeElements.length;i++) {
			console.log(treeElements.length);
			if(treeElements[i].parent == 'null' && treeElements[i].level == 0) {
				//Parent Node is Created Dynamically
				document.getElementById('hierarchyContainer').innerHTML = '<li id='+treeElements[i].id+'><a href="#">'+treeElements[i].id+'</a></li>';
				// delete treeElements[i];
				console.log(treeElements.length);

				for(j=0;j<treeElements.length;j++) {
					if(treeElements[i].id == treeElements[j].parent) {
						console.log('Matched');
						document.getElementById(treeElements[i].id).innerHTML = '<a href="#">'+treeElements[i].id+'</a><ul><li id='+treeElements[j].id+'><a href="#">'+treeElements[j].id+'</a></li></ul>';
					
						if(treeElements.length == 3) {
							for(k=0;k<treeElements.length;k++) {
								console.log(treeElements[j].id + "         "+ treeElements[k].parent);
								if(treeElements[j].id == treeElements[k].parent) {
									document.getElementById(treeElements[j].id).innerHTML = '<a href="#">'+treeElements[j].id+'</a><ul><li><a href="#">'+treeElements[k].id+'</a></li></ul>'
								}
							}
						}
					}
				}
			}
		}
	}

	//Bydefault Call to Get Family Hierarchy Tree
	getHierarchy();
}])