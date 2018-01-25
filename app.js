(function () {
'use strict';
angular.module("NameCalculator", [])

.controller('NameCalculatorControler', ['$scope', '$filter', function ($scope, $filter){
$scope.name = "Luke";
$scope.totalValue = 0;
$scope.stateOfBeing = "hungry";

$scope.displayNumeric = function () {
	var totalNameValue = calculatNumericForString($scope.name);
	$scope.totalValue = totalNameValue;
};

function calculatNumericForString(string) {
	var totalStringValue = 0;
	for (var i =  0; i < string.length; i++){
		totalStringValue += string.charCodeAt(i);
	}
	return totalStringValue;
}
$scope.sayMassage = function(){
	return "Luke is so good at Angular!";
};
$scope.upper = function () {
	var upCase = $filter('uppercase');
	$scope.name = upCase($scope.name);
	console.log("$scope.upper");
};

$scope.feedYaakov = function (){
	$scope.stateOfBeing = "fed";
};

}]);

})();
