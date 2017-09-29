


describe('calc.controller test suite', function () {

    let _$controller;

    beforeEach(module('calc'));
    beforeEach(inject(function (_$controller_) {
        _$controller = _$controller_;
    }));

    let controller;
    var $scope;
    beforeEach(function () {
        $scope = {};
        controller = _$controller('CalcController', { $scope: $scope }); // ng-controller="CalcController"
        $scope.first = 1;
        $scope.second = 2;
    });


    it('shud 1+2=3', function () {
        $scope.doArith(); // ng-click
        expect($scope.latest).toBe(3);

    })
    it('shud 1-2=3', function () {
        $scope.operator = "-";
        $scope.doArith(); // ng-click
        expect($scope.latest).toBe(-1);
    })


});