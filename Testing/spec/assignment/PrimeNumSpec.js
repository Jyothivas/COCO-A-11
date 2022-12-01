const PrimeNum=require('../../lib/jasmine_examples/assignment/PrimeNum');

//test cases for prime number
describe('Prime Number',function(){
    it('check the number is prime or not?',function(){
        const primeNum = new PrimeNum();
        expect(primeNum.isPrime(0)).toEqual('Not Prime');
        expect(primeNum.isPrime(1)).toEqual('Not Prime');
        expect(primeNum.isPrime(2)).toEqual('Prime');
        expect(primeNum.isPrime(3)).toEqual('Prime');
        expect(primeNum.isPrime(4)).toEqual('Not Prime');
        expect(primeNum.isPrime(5)).toEqual('Prime');
        expect(primeNum.isPrime(7)).toEqual('Prime');
        expect(primeNum.isPrime(15)).toEqual('Not Prime');
        expect(primeNum.isPrime(82)).toEqual('Not Prime');
        expect(primeNum.isPrime(83)).toEqual('Prime');
        expect(primeNum.isPrime(29)).toEqual('Prime');

        
    });
});