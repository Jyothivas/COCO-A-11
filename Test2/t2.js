function f() {
  console.log("this is text1");
}
f();
        //Copy and rename file//

copyFille=()=>{   
let fs = require("fs");
let today = new Date();
let main = "main.txt";
let copy = `copy${today.getFullYear()} ${today.getMonth()} ${today.getDate()} ${today.getHours()} ${today.getMinutes()} ${today.getSeconds()}.txt`;
console.log(copy);
fs.copyFile(main,`f1/${copy}`, function (error) {
  if (error) {
    console.log("Error", error);
  } else 
  console.log("file copy successfuly");
});
}
setInterval(copyFille,4000);


// fs.rename('copy1.txt','copy2.txt',function(error){
//     if(error){
//         console.log(error);
//     }else
//         console.log(`copy2 ${today}.txt`);
    
// });