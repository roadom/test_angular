/**
 * 模块化
 */
//相当于选择器吧，找到页面上ng-app对应的这个值
var myModule = angular.module("HelloAngular", []);

//再找到这个ng-app中的controller，对其进行操作
myModule.controller(
	"helloAngular", 
	['$scope', 		//看上去像是依赖注入
		 function HelloAngular($scope){		//这个方法可以是匿名方法
			$scope.greeting = {
				text : "你好"	
			};
		}
	]
);