let fs=require('fs')
let date=new Date();
let src="original.txt"
let des=`copy file/original ${date.getFullYear()}-${date.getDate()}-${date.getMonth()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.txt`;

fs.copyFile(src,des, function(error){

    if(error){
        console.log('getting error file not copy..')
    }
    else
    {                
        console.log('file copy successfully..')
    }    

})


