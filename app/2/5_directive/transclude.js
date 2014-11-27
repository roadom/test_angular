var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
    	restrict:"AE",
    	/*
    	与replace相对应，表示嵌套。
    	原先指令标签中所包含的内容，会被嵌套在拥有 ng-transclude 的标签中
    	*/
    	transclude:true,
    	template:"<div>Hello everyone!<div ng-transclude></div></div>"
    } 
});