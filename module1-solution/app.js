(function () {
	"use strict";

	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope) {
  $scope.name = "Yaakov";
  $scope.lunchList = "";
  $scope.lunchMess = "";

  $scope.sayMessage = function () {
	var space = " ";
    var comma = ",";
	splitString ($scope.lunchList, comma);
  };
function splitString(stringToSplit, separator) {
	//console.log("Lunch list " + $scope.lunchList);
	var arrayOfStrings = stringToSplit.split(separator);
	var listLength = arrayOfStrings.length;

	if (listLength === 1) {
    $scope.lunchMess = "Please enter data first";
	} else if (listLength <= 3) {
    $scope.lunchMess = "Enjoy!";
	} else if (listLength > 3) {
    $scope.lunchMess = "Too Much!";
	}
	/*
	console.log("The original string is: "" + stringToSplit + """);
	console.log("The separator is: "" + separator + """);
	console.log("The array has " + arrayOfStrings.length + " elements: " + arrayOfStrings.join(" / "));
	*/
}
}
})();
