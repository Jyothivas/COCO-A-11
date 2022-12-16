const CountWord = require('../../lib/jasmine_examples/assignment/CountWord')

describe('Count Word', function(){

    it('Total words in a string', function(){
        const countWord = new CountWord();
        expect(countWord.strWord('')).toEqual(0);
        expect(countWord.strWord(' ')).toEqual(0);
        expect(countWord.strWord('yes')).toEqual(1);
        expect(countWord.strWord('yes ')).toEqual(1);
        expect(countWord.strWord(' a')).toEqual(1);
        expect(countWord.strWord('yes No')).toEqual(2);
        expect(countWord.strWord('yes  No')).toEqual(2);
        expect(countWord.strWord('This project is done')).toEqual(4);
        expect(countWord.strWord('today is thrusday')).toEqual(3);
        expect(countWord.strWord('Total words in a string')).toEqual(5);
        expect(countWord.strWord(' hello how are you? ')).toEqual(4);

    });
});