var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
    	restrict:"AE",
    	template:"<div>Hello everyone!</div>",
    	/*
    	元素内部内容将被完全覆盖替换
    	*/
    	replace:true
    } 
});