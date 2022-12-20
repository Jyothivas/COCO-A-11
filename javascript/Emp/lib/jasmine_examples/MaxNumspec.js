//const MaxNumber=require('../../lib/jasmine_examples/MaxNum');


//test cases for max number...
describe('Max Number', function(){

    it('find the maximum numbers',function(){
        const maxNumber = new MaxNumber();
        expect(maxNumber.findMax(1,0,0)).toEqual('a');
        expect(maxNumber.findMax(0,1,0)).toEqual('b');
        expect(maxNumber.findMax(0,0,1)).toEqual('c');

        expect(maxNumber.findMax(1,1,0)).toEqual('ab');
        expect(maxNumber.findMax(0,1,1)).toEqual('bc');
        expect(maxNumber.findMax(1,0,1)).toEqual('ac');

        expect(maxNumber.findMax(1,1,1)).toEqual('abc');
    });
});