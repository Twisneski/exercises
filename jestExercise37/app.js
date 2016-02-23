var app = angular.module("Jest", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider.
      when('/jest/home', {
        templateUrl: 'partials/indexPartial.html',
        controller: 'jestTest.js'
      })
      .otherwise('/jest/home');

}]);//end of config