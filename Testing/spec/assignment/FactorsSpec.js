const Factors=require('../../lib/jasmine_examples/assignment/Factors');

describe('Factors of number',function(){
    it('List of factors of the numbers',function(){
        const factors = new Factors();
        expect(factors.getFactors(0)).toEqual('0');
        expect(factors.getFactors(1)).toEqual('1');
        expect(factors.getFactors(2)).toEqual('1,2');
        expect(factors.getFactors(3)).toEqual('1,3');
        expect(factors.getFactors(4)).toEqual('1,2,4');
        expect(factors.getFactors(5)).toEqual('1,5');
        expect(factors.getFactors(6)).toEqual('1,2,3,6');
        expect(factors.getFactors(7)).toEqual('1,7');
        expect(factors.getFactors(8)).toEqual('1,2,4,8');
        expect(factors.getFactors(9)).toEqual('1,3,9');
        expect(factors.getFactors(15)).toEqual('1,3,5,15');
    
    });
});