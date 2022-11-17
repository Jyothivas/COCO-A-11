var fs = require('fs');
var src="original.txt";
var des="test/original.txt";

fs.copyFile(src,des,function(error){
    if(error)
        console.log('getting error')
    else
        console.log('file copy successfully')
    })
