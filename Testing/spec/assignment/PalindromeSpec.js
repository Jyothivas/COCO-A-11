const Palindrome = require('../../lib/jasmine_examples/assignment/Palindrome');

describe('palindrome check',function(){
    it('Find if a string is a palindrome',function(){
        const palindrome = new Palindrome();
        expect(palindrome.isPalindrome('a')).toEqual('Palindrome');
        expect(palindrome.isPalindrome('aa')).toEqual('Palindrome')
        expect(palindrome.isPalindrome('ab')).toEqual('Not Palindrome');
        expect(palindrome.isPalindrome('aba')).toEqual('Palindrome');
        expect(palindrome.isPalindrome('aaa')).toEqual('Palindrome');
        expect(palindrome.isPalindrome('abc')).toEqual('Not Palindrome');
        expect(palindrome.isPalindrome('aab')).toEqual('Not Palindrome');
        expect(palindrome.isPalindrome('aaaa')).toEqual('Palindrome');
        expect(palindrome.isPalindrome('abba')).toEqual('Palindrome');
        expect(palindrome.isPalindrome('abca')).toEqual('Not Palindrome');
        expect(palindrome.isPalindrome('aaaaa')).toEqual('Palindrome');
        expect(palindrome.isPalindrome('madam')).toEqual('Palindrome');
        expect(palindrome.isPalindrome('121')).toEqual('Palindrome');
        expect(palindrome.isPalindrome('111')).toEqual('Palindrome');
        expect(palindrome.isPalindrome('123')).toEqual('Not Palindrome');
    });
});