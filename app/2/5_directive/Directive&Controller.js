var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.loadData=function(){
		console.log("加载数据中...");
    }
}]);
myModule.controller('MyCtrl2', ['$scope', function($scope){
    $scope.loadData2=function(){
        console.log("加载数据中...22222");
    }
}]);
myModule.directive("loader", function() {
    return {
    	restrict:"AE",
            /*
            在link中为dom元素绑定事件
            attrs 模板元素中的属性
            */
    	link:function(scope,element,attrs){
    		element.bind('mouseenter', function(event) {
    			// scope.loadData();     //直接调用。注入进来的scope就是外部的$.scope，可以调用绑定在其上的方法
    			// scope.$apply("loadData()");   //通过$apple调用
                                /*
                                $apply 可以方便的进行调用
                                */
    			// 注意这里的坑，howToLoad会被转换成小写的howtoload
    			scope.$apply(attrs.howtoload);
    		});
        }
    } 
});