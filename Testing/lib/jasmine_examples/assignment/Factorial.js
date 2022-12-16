class Factorial{
    
    sumOfFactorial(number){
        if(number==0)
            return'Enter greater than zero number';      
        if(number==1)
            return 1;
        return number * this.sumOfFactorial(number-1);       
    }
}
module.exports=Factorial;
