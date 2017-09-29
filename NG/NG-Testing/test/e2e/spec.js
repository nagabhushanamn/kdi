describe('Calc App', function () {
    it('should have a title', function () {
        browser.get('http://127.0.0.1:8080/src/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });


    it('should add 10 and 20', function () {

        var firstNumber = element(by.model('first'));
        var secondNumber = element(by.model('second'));
        var goButton = element(by.id('gobutton'));
        var latestResult = element(by.binding('latest'));

        firstNumber.sendKeys(10);
        secondNumber.sendKeys(20);

        goButton.click();

        expect(latestResult.getText()).toEqual('30');
    });


});
