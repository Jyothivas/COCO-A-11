const CountWord = require('../../lib/jasmine_examples/CountWord')

describe('Count Word', function(){

    it('Total words in a string', function(){
        const countWord = new CountWord();
        expect(countWord.strWord('This project is done')).toEqual(4);
        expect(countWord.strWord('today is thrusday')).toEqual(3);
        expect(countWord.strWord('Total work complete')).toEqual(3);
    });
});
