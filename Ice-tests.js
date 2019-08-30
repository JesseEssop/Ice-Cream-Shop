describe('Ice Cream Shop tests', function () {
    describe('Flavour tests', function () {
        it('This test takes in the name of a flavour and returns the total amount ', function () {
            var testInstance = IceCreamFactory();
            testInstance.flavour("Strawberry");
            assert.equal(testInstance.total(), 15);

        });
        
        it('This test takes in multiple flavours and returns the total amount ', function () {
            var testInstance = IceCreamFactory();
            testInstance.flavour("Strawberry");
            testInstance.flavour("Chocolate");
            testInstance.flavour("Vanilla");
            testInstance.flavour("English Toffee");
            assert.equal(testInstance.total(), 72);

        });
    });

    describe('Cone tests', function(){
        it('This test returns the amount of a Plain Cone ', function () {
            var testInstance = IceCreamFactory();
            testInstance.contain("Plain Cone");
            assert.equal(testInstance.total(), 7);

        });
        it('This test returns the amount of a Sugar Cone ', function () {
            var testInstance = IceCreamFactory();
            testInstance.contain("Sugar Cone");
            assert.equal(testInstance.total(), 12);

        });
        it('This test returns the amount of a Paper Cup ', function () {
            var testInstance = IceCreamFactory();
            testInstance.contain("Paper Cup");
            assert.equal(testInstance.total(), 15);

        });
    });

    describe('Toppings tests',function(){
        it('This test returns the total amount of a topping that has been selected ', function () {
            var testInstance = IceCreamFactory();
            testInstance.topping("Oreos");
            assert.equal(testInstance.total(), 10);

        });
        it('This test returns the total amount of multiple toppings that has been selected ', function () {
            var testInstance = IceCreamFactory();
            testInstance.topping("Oreos");
            testInstance.topping("Jelly Babies");
            testInstance.topping("Smarties");
            testInstance.topping("Astros");
            assert.equal(testInstance.total(), 36);

        });
    });

});