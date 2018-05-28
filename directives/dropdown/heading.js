app.directive('dropdownHeading', function () {
    return {
        scope: {
            heading:'='
        },
        link: function ($scope, element, attrs) {
            $scope.heading ='dropdowns',
            $scope.togglesidebar = function () {
                $(".dropdownSelect").animate({ width: "toggle"});
            }
        },
        template:` <div class='row'>
        <i class='fa fa-navicon fa-lg col-xs-1 togglesidebar' ng-click='togglesidebar()'></i>
        <h2 class='col-xs-11 heading'>{{heading}}</h2></div>`
    };
});
