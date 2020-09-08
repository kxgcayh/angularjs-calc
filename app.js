var app = angular.module('xapp', []);
app.controller('xctrl', function($scope) {
    $scope.operate = function (code){
        var val1 = +$scope.valOne,
            val2 = +$scope.valTwo; // Add plus before scope to make it Integer
        switch (code){
            case 1:
                $scope.operation = "ADD";
                $scope.result = val1 + val2;
                break;
            case 2:
                $scope.operation = "SUBSTRATION";
                $scope.result = val1 - val2;
                break;
            case 3:
                $scope.operation = "MULTIPLY";
                $scope.result = val1 * val2;
                break;
            case 4:
                $scope.operation = "DIVIDE";
                $scope.result = val1 / val2;
                break;
        }
    }
});