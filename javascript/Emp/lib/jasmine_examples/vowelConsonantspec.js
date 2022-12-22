const VowelConsonant = require('../../lib/jasmine_examples/VowelConsonant');

describe('Vowels and Consonant',function(){
    
    it('Count vowels and consonant in a string',function(){
        const vowelsConsonants=new VowelConsonant();
        expect(vowelsConsonants.countVowelsConsonants('')).toEqual('Enter a string');
        expect(vowelsConsonants.countVowelsConsonants(' ')).toEqual('Enter a string');
        expect(vowelsConsonants.countVowelsConsonants('a')).toEqual('vowels: 1, consonant: 0');
        expect(vowelsConsonants.countVowelsConsonants('A ')).toEqual('vowels: 1, consonant: 0');
        expect(vowelsConsonants.countVowelsConsonants('ab ')).toEqual('vowels: 1, consonant: 1');
        expect(vowelsConsonants.countVowelsConsonants('Total words in A string')).toEqual('vowels: 6, consonant: 13');
        expect(vowelsConsonants.countVowelsConsonants('today is a fine day')).toEqual('vowels: 10, consonant: 20');
    });
});