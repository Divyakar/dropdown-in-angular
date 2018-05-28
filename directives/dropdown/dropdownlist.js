app.directive('dropdownList', function () {
    return {
        scope: {
            dropdowntype: "=",
            onChange: '&',
        },
        link: function ($scope, element, attrs) {
            $scope.listSelect = function (value) {
                $scope.multiple = value === 0 ? false : true;
                $scope.onChange({ value: $scope.multiple });
            }
        },
        templateUrl: 'directives/dropdown/dropdowntype.tmpl.html'
    };
});
