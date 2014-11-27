var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.sayHello=function(name){
		alert("Hello "+name);
	}
}])
myModule.directive("greeting", function() {
    return {
    	restrict:'AE',
        /*
        传递一个来自父层scope中的函数
        */
        scope:{
        	greet:'&'
        },
        template:'<input type="text" ng-model="userName" /><br/>'+
        		 '<button class="btn btn-default" ng-click="greet({name:userName})">Greeting</button><br/>'
    }
});