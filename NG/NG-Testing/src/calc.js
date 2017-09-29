

angular.module('calc', [])
    .controller('CalcController', function ($scope) {
        $scope.latest = 0;
        $scope.operator = "+"
        $scope.doArith = function () {
            if ($scope.operator === "+") {
                $scope.latest = Number.parseInt($scope.first) + Number.parseInt($scope.second)
            }
            if ($scope.operator === "-") {
                $scope.latest = Number.parseInt($scope.first) - Number.parseInt($scope.second)
            }
        }
    });
