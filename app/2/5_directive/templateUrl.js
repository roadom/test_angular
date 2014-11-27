var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'AECM',
        /*
	使用templateUrl代替template，可以直接包含文件
        */
        templateUrl: 'hello.html',
        replace: true
    }
});