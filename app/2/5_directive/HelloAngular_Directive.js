var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
    	/*
	A 属性	默认
	E 标签	常用
	M 注释		<!-- directive:hello -->		//左右需要空格
	C 类
    	*/
        restrict: 'AEMC',
        template: '<div>Hi everyone!</div>',
        replace: true
        /*
        将在编译阶段被调用，需要在其中显示的调用默认的compile
        compile:function(){}
        主要用于操作dom
        可以给dom元素中绑定事件，绑定作用域
        link:function(){}
        */
    }
});