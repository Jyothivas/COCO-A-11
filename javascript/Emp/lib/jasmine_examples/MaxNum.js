class MaxNumber{

    findMax(a,b,c){
        let result='';
        if(a>=b && a>=c){
            result= result +'a';
        }
        if(b>=c && b>=a){
            result= result +'b';
        }
        if(c>=a && c>=b){
            result= result +'c';
        }

        return result;

    }

}

module.exports = MaxNumber;