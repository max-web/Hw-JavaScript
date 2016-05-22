var app = require('../js/app.js'); //команда Node.js для загрузки файла


describe("Test calculateExponent() - ", function() {
    it("exponent abowe zero - 2^3", function() {
        // prepare
        var result;

        // act
        result = app.calculateExponent(2, 3);

        // assert
        expect(result).toEqual(8);
    });

    it("exponent equal zero - 2^0", function() {
        // prepare
        var result;

        // act
        result = app.calculateExponent(2, 0);

        // assert
        expect(result).toEqual(1);
    });

    it("exponent below zero - 2^-5", function() {
        // prepare
        var result;

        // act
        result = app.calculateExponent(2, -5);

        // assert
        expect(result).toEqual(0.03125);
    });


});
