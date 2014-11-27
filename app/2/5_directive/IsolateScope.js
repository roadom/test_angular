var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'AE',
        /*
        独立scope
        如果没有这一行，页面中四个userName将同步的变化
        加上这一行，每一行的{{userName}}仅会因为自己的这一行的ng-model变化而变化
        */
        scope:{},
        template: '<div><input type="text" ng-model="userName"/>{{userName}}</div>',
        replace: true
    }
});