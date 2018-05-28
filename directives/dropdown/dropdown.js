app.directive("dropdown", function ($rootScope) {
    return {
        restrict: 'E',
        scope: {
            multiple: "@",
            data: "=",
            heading: "=",
            value: "="
        },
        link: function (scope, element, attrs) {
            scope.showList = false;
            scope.selectedList = [];

        },
        controller: function ($scope, $rootScope) {
            $scope.letter = "";
            $scope.initialize = function () {
                if ($scope.multiple === 'false') {
                    $scope.selectedList = ['India'];
                }
                else {
                    $scope.selectedList = ['Telangana'];
                }
            }
            $scope.setState = function (selecteddata) {
                if ($scope.multiple === 'true') {
                    if ($scope.selectedList.indexOf(selecteddata.value) === -1)
                        $scope.selectedList.push(selecteddata.value);
                    else {
                        $scope.removeItem(selecteddata.value);
                    }
                } else {
                    if ($scope.selectedList.indexOf(selecteddata.value) !== -1) {
                        $scope.removeItem(selecteddata.value);
                    } else {
                        $scope.selectedList = [];
                        $scope.selectedList.push(selecteddata.value);
                        $scope.letter = selecteddata.value
                    }
                }
                $scope.letter = '';
            }
            $scope.removeItem = function (removevalue) {
                var index = $scope.selectedList.indexOf(removevalue);
                $scope.selectedList.splice(index, 1);
            }
            $scope.isSelected = function (selectedlistvalue) {
                if ($scope.selectedList.indexOf(selectedlistvalue.value) !== -1) {
                    return true;
                }
            }
            $scope.$watch('showList', function (oldValue, newValue) {
                if ($scope.showList === true) {
                    $(".dropdown-overlay").removeClass('hide');
                }
                else {
                    $(".dropdown-overlay").addClass('hide');
                }
                $(".dropdownList").slideToggle();
            })

            $scope.togglelist = function () {
                $scope.showList = !$scope.showList;
            }
            $rootScope.$on("showListUpdate", function (args, flag) {
                $scope.showList = flag;
            })
        },
        templateUrl: 'directives/dropdown/dropdown.tmpl.html'
    };
});