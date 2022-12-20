class Factorial{
    
    sumOfFactorial(number){
        let ans=1;
        if(number==0)
            return'Enter greater than zero number';      
        while(number){
            ans=ans*number;
            number--;
        }
        return ans;
    
    }

}
module.exports=Factorial;
