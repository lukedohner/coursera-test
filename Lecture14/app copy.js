(function () {
'use strict';

angular.module('CounterApp', [])
.controller('BindingController', BindingController);

BindingController.$inject = ['$scope', '$timeout'];
function BindingController($scope, $timeout) {
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.firstName = "Yaakov";
  // $scope.fullname = "Teacher";

  $scope.showNumberOfWatchers = function () {
    console.log($scope);
    console.log("# of Watchers: ", $scope.$$watchersCount);
  };

  $scope.setFullName = function () {
    console.log("setFullName fired");
    $scope.fullName = $scope.firstName + " " + "Chaikin";
  };

  $scope.logFirstName = function () {
    console.log ("First Name is: " , $scope.firstName);
  };

  $scope.logFullName = function () {
    console.log ("Full name is: " , $scope.fullName);
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
