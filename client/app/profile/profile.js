angular.module('profile', [])
.controller('profileController', function($scope, $window){
	$scope.firstName = 'Alex';
	$scope.lastName = 'Chou';
	$scope.x = $window.sessionStorage.user;
});