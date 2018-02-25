angular.module('app').directive('authors', function() {
    return {
        restrict: 'E',
        scope: {
            data: '=',
            action: '&'
        },
        templateUrl: './template/table.html'
    };
});