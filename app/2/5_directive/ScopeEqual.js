var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor="百威";
}])
myModule.directive("drink", function() {
    return {
    	restrict:'AE',
    	/*
    	双向数据绑定，
    	directive中的内容和controller中的内容将会互相绑定
    	*/
        scope:{
        	flavor:'='
        },
        template:'<input type="text" ng-model="flavor"/>'
    }
});