const VowelConsonant = require('../../lib/jasmine_examples/assignment/VowelConsonant');

describe('Vowels and Consonant',function(){
    
    it('Count vowels and consonant in a string',function(){
        const vowelsConsonants=new VowelConsonant();
        expect(vowelsConsonants.countVowelsConsonants('')).toEqual('Enter a string');
        expect(vowelsConsonants.countVowelsConsonants(' ')).toEqual('Enter a string');
        expect(vowelsConsonants.countVowelsConsonants('a')).toEqual('vowels: 1, consonant: 0');
        expect(vowelsConsonants.countVowelsConsonants('A ')).toEqual('vowels: 1, consonant: 0');
        expect(vowelsConsonants.countVowelsConsonants('ab ')).toEqual('vowels: 1, consonant: 1');
        expect(vowelsConsonants.countVowelsConsonants('Total words in A string')).toEqual('vowels: 6, consonant: 13');
        expect(vowelsConsonants.countVowelsConsonants('I  am  going to delhi')).toEqual('vowels: 7, consonant: 8');
        expect(vowelsConsonants.countVowelsConsonants('I  am_ going to delhi')).toEqual('vowels: 7, consonant: 8');
        expect(vowelsConsonants.countVowelsConsonants('hello, how are you?')).toEqual('vowels: 7, consonant: 7');

    });
});