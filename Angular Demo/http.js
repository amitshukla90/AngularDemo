
var app = angular.module('myApp', []);
			var header = {
				'Access-Control-Allow-Origin' : '*',
				'Content-Type': 'application/json'
			};
		app.controller('myController', function($scope,$http){
			$http({
				 method : "GET",
				 url : "http://localhost:8080/login/hello",
				 headers: header
			}).then(function success(response){
				$scope.responseVal = response.data;
			}, function errorResult(response){
				$scope.responseVal = "Error while calling the services";
			});

		});

