class Factors{

    getFactors(number){
        if(number<2){
            return number+'';
        }
        let retVal = "1";

        for(let divisor = 2; divisor <= number; divisor++) {
            if(number%divisor == 0) {
                retVal += "," + divisor ;
            }    
        }
        return retVal;        
    }
}
module.exports=Factors;