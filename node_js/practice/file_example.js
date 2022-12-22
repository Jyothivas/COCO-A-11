const { error } = require('console');
const fs = require('fs');

//readFile

/* fs.readFile('./abc.txt',(error,data)=>{
    if(error){
        console.log("error "+error);
    }else{
        console.log(data.toString());
    }
});

//writeFile

let content="we are create dynamic file and write content..."
fs.writeFile('./write.txt',content,(error)=>{
    if(error){
        console.log("error "+error);
    }else{
        console.log("saved..");
    }
}); */

//appendFile

/* let data="\nwe are add new data in abc.txt file..."
fs.appendFile('./abc.txt',data,(error) =>{
    if(error){
        console.log("error "+error);
    }else{
        console.log("saved..\nadd new content..");
    }
}); */

//deleteFile

fs.unlink('./write.txt',(error)=>{
    if(error){
        console.log("error "+error);
    }else{
        console.log("deleted..");
    }
});