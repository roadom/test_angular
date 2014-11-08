/**
 * 1. 取出ng-app，声明为module
 * 2. 进行依赖注入。
 * 		在其他文件中使用 angular.module() 声名的module，都可以通过该种方式，注入到当前module中
 * 		ng开头的为angular原生的内容。必须要将相应的angular组件js引入页面才可以
		
 */
var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives'
]);

/**
 * 配置路由器
 */
bookStoreApp.config(function($routeProvider) {
	/*
	 * 当浏览器中输入 "#hello"时。对其进行路由
	 */
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',		//指定使用模板
        controller: 'HelloCtrl'		//将请求路由给HelloCtrl。该controller已经在名为bookStoreCtrls的module中声明过了
    }).when('/list',{
    	templateUrl:'tpls/bookList.html',
    	controller:'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
