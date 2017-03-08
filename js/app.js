var myApp = angular.module('myApp', []);

myApp.controller('hierarchyController', ['$scope',function($scope) {


	// Globally Decalared Array Containing Family Hierarchy Tree Nodes (Initially Containing Parent Node )
	var treeElements = [
		{
			id		: 	'Head_Office',
			parent	:	'null',
			level	: 	 0
		}
	];



	//Find Child Nodes of the Parent Node
	var findChildNodes = function(parent,array) {

		//Create an Empty Child Nodes Array
		var childNodes = [];

		//Loop through the length of Array
		for(i=0; i<array.length; i++) {
			if(array[i].parent == parent.id) {
				childNodes.push(array[i]);
			}
		}
		return childNodes;
	}



	//Function to Create Leveled Unordered List of Child Nodes Having Same Parent
	var createList = function(array) {
		if(array.length > 0) {
			document.getElementById(array[0].parent).innerHTML = '<a href="#">'+array[0].parent+'</a><ul id="'+array[0].parent+'UL"></ul>';
			
			for(i=0; i<array.length; i++) {
				document.getElementById(array[0].parent+'UL').appendChild(document.createElement("li")).innerHTML = '<a href="#">'+array[i].id+'</a>';
			}			
		}
	}




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
		// console.log(treeElements);
		getHierarchy();
	};




	//Function to Make A Family Hierarchy Tree
	var getHierarchy = function() {
		

		//Loop to check parent of Elements inside the treeElements Array
		for(i=0;i<treeElements.length;i++) {
			
			if(treeElements[i].parent == 'null' && treeElements[i].level == 0) {
				
				//Parent Node is Created Dynamically
				document.getElementById('hierarchyContainer').innerHTML = '<li id='+treeElements[i].id+'><a href="#">'+treeElements[i].id+'</a></li>';
				
				//Find Child Nodes of this Parent Node and Store them in childNodeArray
				var childNodeArray = findChildNodes(treeElements[i],treeElements);

				//Call createList Function with childNodeArray
				createList(childNodeArray);
			}

		}

	}


	//Bydefault Call to Get Family Hierarchy Tree
	getHierarchy();


}]);