/**
 * 指令
 */
var myModule = angular.module("MyModule", []);
//directive 方法将页面上指定的标签替换成某个其他的返回值
myModule.directive("hello", function(){		//重写标签的标签名称
	return{
		restrict : 'E',
		template : '<div>whats up man</div>',		//所替换的显示内容
		replace : true
	}
});