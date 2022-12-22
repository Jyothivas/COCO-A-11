const { OddEven } = require("./EvenModule");

console.log(1,test(4,'not prime'));
console.log(2,test(1,'not prime'))
console.log(3,test(0,'not prime'))
console.log(4,test(5,'Is prime'))
console.log(5,test(2,'Is prime'))
console.log(6,test(19,'Is prime'))
console.log(7,test(97,'Is prime'))
console.log(8,test(10,'not prime'))
console.log(9,test(8,'not prime'))
console.log(10,test(15,'not prime'))
console.log(11,test(21,'not prime'))
console.log(12,test(29,'Is prime'))
console.log(13,test(53,'Is prime'))
console.log(14,test(23,'Is prime'))


function test(num,output){
    
     if(checkPrime(num)===output){
        return num+" Is prime "+OddEven(num); 
    }else{
        return num+" not prime "+OddEven(num);
    }
 
  //  return checkPrime(num)===output;


}

function checkPrime(num){
    if(num<2){
        return 'not prime';
    }
    for(let i=2;i<=num/2;i++){
        if(num % i==0){
            return 'not prime';
        }
        
    }
    return 'Is prime';
}
