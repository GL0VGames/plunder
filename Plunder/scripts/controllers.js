var plunder = angular.module("plunder", []);
var maybeUser = [];
plunder.controller("plunderController", ["$scope", function($scope, $http) {
	$scope.users = 5;
	$scope.deck = [];
	$scope.username = "Anonymous";
	$scope.getDeck = function () {
		$scope.deck = (typeof(sessionStorage.deck) !== "undefined") ? JSON.parse(sessionStorage.deck) : -1;
	};
	$scope.getUser = function () {
		//$http.get("dev.monochromicon.me/login.php")
		//	.success(function (response) { maybeUser = response; });
		$scope.username = (typeof (sessionStorage.username) === "string") ? sessionStorage.username : "Anonymous";
	}
}]);
