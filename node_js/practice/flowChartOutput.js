
console.log(test(69,69,69,'abc'));
console.log(test(1,0,0,'a'));
console.log(test(0,2,0,'b'));
console.log(test(1,2,3,'c'));
console.log(test(2,3,3,'bc'));
console.log(test(2,3,5,'c'));
console.log(test(4,3,4,'ac'));
console.log(test(4,4,2,'ab'));


function test(a,b,c,output)
{
    let max=(findMax(a,b,c));
    
    return max==output;
}

//check greater number
function findMax(a,b,c){

    if(a>=b){
        if(a==b){
            if(a>=c && a==c){
                return 'abc';
            }
            else if(a>c){
                return 'ab';
            }
            else
                return 'a'
        }
        else if(a>=c){
                if(a==c){
                    return 'ac'
                }
                else
                    return 'a'
            }
            else{
                return 'c';
            }
    }
    else if(b>=c){
            if(b==c){
                return 'bc';
            }
            else{
                return 'b';
            }
    }else if(a>=c){
            return 'a';
    }
    else
        return 'c';

}