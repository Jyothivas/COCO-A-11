const Factorial = require('../../lib/assignment/Factorial');

describe('Factorial numbers',function(){
    it('Addition of the factorial number',function(){
        const factorial = new Factorial();
        expect(factorial.sumOfFactorial(0)).toEqual('Enter greater than zero number');
        expect(factorial.sumOfFactorial(1)).toEqual(1);
        expect(factorial.sumOfFactorial(2)).toEqual(2);
        expect(factorial.sumOfFactorial(3)).toEqual(6);
        expect(factorial.sumOfFactorial(4)).toEqual(24);
        expect(factorial.sumOfFactorial(5)).toEqual(120);
    });
});