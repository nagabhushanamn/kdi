

describe('calc suite', function () {

    let calc;

    // Arrange
    beforeEach(function () {
        calc = new Calc();
    });


    it('shud be 1+2=3', function () {
        // Act
        let actual = calc.add(1, 2);
        // Assert
        expect(actual).toBe(3);
    })

    it('shud not be 1+2=-1', function () {
        // Act
        let actual = calc.add(1, 2);
        // Assert
        expect(actual).not.toBe(-1);
    })


});