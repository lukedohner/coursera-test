(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name = "Yaakov";

  $scope.showNumberOfWatchers = function () {
    console.log($scope);
    console.log("# of Watchers: ", $scope.$$watchersCount);
  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };
$scope.upCounter = function () {
  $timeout( function(){
    $scope.counter++;
     console.log("upCounter fired");
  }, 2000);
};

  // $scope.upCounter = function () {
  //     setTimeout (function (){
  //     $scope.counter++;
  //     console.log("upCounter fired");
  //     $scope.$digest();
  //     }, 2000);
  // };

  // $scope.$watch ( function () {
  //   console.log("Digest Loop Fired!");
  // });
}
  // $scope.$watch('onceCounter', function (newValue, oldValue) {
  //   console.log("onceCounter old value: ", oldValue);
  //   console.log("onceCounter new value: ", newValue);
  // });
  //
})();
