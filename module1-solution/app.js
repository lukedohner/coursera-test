(function () {
	"use strict";

	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope) {
  $scope.name = "Yaakov";
  $scope.lunchList = "";
  $scope.lunchMess = "";
  $scope.CustomStyle = {};
  $scope.BColor = "Yellow";
  $scope.Color = "Blue";
  $scope.ColorBorder = "Green";

  $scope.sayMessage = function () {
	var space = " ";
    var comma = ",";
    var myColor = "white";
	splitString ($scope.lunchList, comma);
  };
  
  $scope.SetStyle = function () {
            $scope.CustomStyle = {
             'background-color': $scope.BColor,
             'color' : $scope.Color,
             "padding-left": "4px",
             "border": "1px",
             "border-color": $scope.ColorBorder,
             "border-style": "solid"
            };
        };
  
function splitString(stringToSplit, separator) {
	//console.log("Lunch list " + $scope.lunchList);
	var arrayOfStrings = stringToSplit.split(separator);
	var listLength = arrayOfStrings.length;

	if (stringToSplit === "") {
    $scope.lunchMess = "Please enter data first";
    $scope.BColor = "White";
    $scope.Color = "Red";
    $scope.ColorBorder = "Red";
    $scope.SetStyle();
	} else if (listLength <= 3) {
    $scope.lunchMess = "Enjoy!";
    $scope.BColor = "White";
    $scope.Color = "Green";
    $scope.ColorBorder = "Green";
    $scope.SetStyle();
	} else if (listLength > 3) {
    $scope.lunchMess = "Too Much!";
    $scope.BColor = "White";
    $scope.Color = "Green";
    $scope.ColorBorder = "Green";
    $scope.SetStyle();
	}
	console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"'); 
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
	
	
}
}
})();
