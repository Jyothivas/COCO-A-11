class PrimeNum{

    isPrime(num){
        if(num<2){
            return 'Not Prime';
        }
        for(let i=2;i<=num/2;i++){
            if(num%i==0){
                return 'Not Prime';
            }
        }
        return 'Prime';
    }

}

module.exports = PrimeNum;