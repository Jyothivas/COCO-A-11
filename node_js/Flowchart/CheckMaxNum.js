

console.log(test(1,0,0,'a'));
console.log(test(0,1,0,'b'));
console.log(test(0,0,1,'c'));
console.log(test(1,1,0,'ab'));
console.log(test(0,1,1,'bc'));
console.log(test(1,0,1,'ac'));
console.log(test(1,1,1,'abc'));


function test(a,b,c,output)
{
    let max=(findMax(a,b,c));
    return max==output;
}

//check greater number
function findMax(a,b,c){
    let result='';

    if(a>=b && a>=c){
        result=result+'a';
    }
    if(b>=c && b>=a){
        result=result+'b';
    }
    if(c>=a && c>=b){
        result=result+'c';
    }

    return result;

}