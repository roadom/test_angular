var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor="百威";
}])
myModule.directive("drink", function() {
    return {
        restrict:'AE',
        /*
            使用@绑定，替换了link中的内容
        */
        scope:{
        	flavor:'@'
        },
        template:"<div>{{flavor}}</div>"
        // ,
        // link:function(scope,element,attrs){
        // 	scope.flavor=attrs.flavor;
        // }
    }
});