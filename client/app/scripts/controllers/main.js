'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
	  'SitePoint'
    ];
	$scope.todos = ['I4','I1','I3'];
	$scope.addTodo = function(){
		$scope.todos.push($scope.todo);
		$scope.todo = '';
	};
	$scope.removeTodo = function (index) {
		$scope.todos.splice(index, 1);
	};
  });
