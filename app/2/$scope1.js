/**
 * 
 */
//function greetCtrl($scope, $rootScope){
//	$scope.name = 'World';
//	$rootScope.department = 'Angular';
//}
//
//function listCtrl($scope){
//	$scope.names = ["aaa", "bbb", "ccc"];
//}


var mm = angular.module("MyModule", []);
mm.controller("greetCtrl", ["$scope", "$rootScope", function($scope, $rootScope){
	$scope.name = "World";
	$rootScope.department = 'Angular';
}]);
mm.controller("listCtrl", ["$scope", function($scope){
	$scope.names= ["aaa", "bbb", "ccc"];
	/*
	//后台将方法挂在在$scope，前台可以通过ng-click等方式进行事件绑定
	$scope.aaa = function(){}
	ng-click="aaa()"
	*/
}]);