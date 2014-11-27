var myModule = angular.module("MyModule", []);

/*
run 只在ng初始化的时候执行一次
$templateCache
键值对形势将模板缓存起来
*/
//注射器加载完所有模块时，此方法执行一次
myModule.run(function($templateCache){
	$templateCache.put("hello.html","<div>Hello everyone!!!!!!</div>");
});

myModule.directive("hello", function($templateCache) {
    return {
        restrict: 'AECM',
        template: $templateCache.get("hello.html"),
        replace: true
    }
});
