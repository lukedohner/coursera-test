(function() {
  "use strict";

  angular
    .module("NarrowItDownApp", [])
    // .controller('MenuCategoriesController', MenuCategoriesController)
    .controller("NarrowItDownController", NarrowItDownController)
    // .service('MenuCategoriesService', MenuCategoriesService)
    .service("MenuSearchService", MenuSearchService)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    var searchTerm = "";
    var promise = MenuSearchService.getMenuItems(searchTerm);

    promise
      .then(function(response) {
        menu.categories = response.data;
        console.log(
          "  >>>>>>>> getMenuForCategory {>>>>>>>>  response short_name = " +
            menu.categories[4].short_name
        );
        console.log(
          "  >>>>>>>> getMenuForCategory {>>>>>>>>  response name = " +
            menu.categories[4].name
        );
        console.log(
          "  >>>>>>>> getMenuForCategory {>>>>>>>>  response special_instructions = " +
            menu.categories[4].special_instructions
        );
      })
      .catch(function(error) {
        console.log("Something went terribly wrong.");
      });

    menu.getMatchedMenuItems = function(searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise
        .then(function(response) {
          //console.log(" JSON.stringify(response)) >>>>>>> " + JSON.stringify(response));
          console.log(
            "  >>>>>>>> promise.then(function (response) {>>>>>>>>  searchTerm = " +
              searchTerm
          );
          console.log(
            "  >>>>>>>> promise.then(function (response) {>>>>>>>>  response.data = " +
              response.data
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    };
  }

  MenuSearchService.$inject = ["$http", "ApiBasePath"];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMenuForCategory = function(searchTerm) {
      var foundItems = $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json"
      });
      return foundItems;
    };

    service.getMenuItems = function(searchTerm) {
      var response = $http({
        method: "GET",
        url: ApiBasePath + "/categories.json"
      });

      return response;
    };

    service.getMatchedMenuItems = function(searchTerm) {
      var response = $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json"
      });
      response.onload = function() {
        if (response.status === 200) {
          console.log("some thing IF" + JSON.stringify(response));
        }
      };
      return response;
    };
  }
})();
