var myModule = angular.module("MyModule", []);
myModule.directive("superman", function() {
    return {
        /*
        这个东西叫做独立scope
        */
        scope: {},
        restrict: 'AE',
        /*
        在directive中使用controller，
        与mvc中的controller不一样，主要目的是为了将指令中的方法暴露出去，以供外部调用
        */
        controller: function($scope) {
            $scope.abilities = [];
            this.addStrength = function() {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("light");
            };
        },
        //使用link处理指令内部数据，对元素进行事件绑定
        link: function(scope, element, attrs) {
            element.addClass('btn btn-primary');
            element.bind("mouseenter", function() {     //jquery light 可使用jquery语法
                console.log(scope.abilities);
            });
        }
    }
});
myModule.directive("strength", function() {
    return {
        /*
        表示 本指令需要依赖于 superman
        */
        require: '^superman',
        /*
        将指令 superman 中所定义的 controller 注入，以供调用其中声名的方法
        觉得可能需要与 require 同时使用才可以如此注入，否则 supermanCtrl 变量名在外部并没有进行显示的声名，应该无法找到
        */
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addStrength();
        }
    }
});
myModule.directive("speed", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});
myModule.directive("light", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});