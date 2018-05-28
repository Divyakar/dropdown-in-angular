var app = angular.module("myApp", ['ngRoute', 'ngAnimate']);
app.controller('dropdownController', function ($http, $scope, $location, $rootScope) {
    $scope.getData = function () {
        $http.get('http://localhost:5800/').then(function (response) {
            $scope.multiDropdownData = response.data.states;
            $scope.singleDropdownData = response.data.countries;
        })
    }

    $location.path('/');
    $scope.getData();
    $scope.dropdownValues = ['Single Select dropdown', 'Multi Select dropdown'];
    $scope.requiredList = function (value) {
        $scope.multiple = value;
        $scope.dropdownData = $scope.multiple ? $scope.multiDropdownData : $scope.singleDropdownData;
        $scope.typeofdropdown = $scope.multiple ? "MultiSelectDropdown" : "SingleSelectDropdown"
    }
    $scope.displayList = function () {
        $(".dropdown-overlay").addClass('hide');
        $rootScope.$broadcast("showListUpdate", false);
    }
});
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'templates/dropdown/main.tmpl.html',//keep main.tmpl.html empty
            title: ''
        })
        .when("/single", {
            templateUrl: 'templates/dropdown/single.tmpl.html',
            title: 'single select dropdown'
        })
        .when("/multiple", {
            templateUrl: 'templates/dropdown/multiple.tmpl.html',
            title: 'multi select dropdown'
        });
});