
let fs=require('fs')
  let date=new Date();
  let dateStr =`copy file/original ${date.getFullYear()}-${date.getDate()}-${date.getMonth()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.txt`;
  let src="original.txt"
  let des="test/copy file.txt"


function fileBackup(){
   date=new Date();
   dateStr =`copy file/original ${date.getFullYear()}-${date.getDate()}-${date.getMonth()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.txt`;

fs.copyFile(src,des, function(error){

    if(error){
        console.log('getting error file not copy..')
    }
    else
            {
              
              fs.rename(des,dateStr, function(result){
                console.log(dateStr)
              
                if(result){
                    console.log("Not change the file name..")
                }
                else{
                console.log("File rename successfully..!!")
                }
              });
            
                            
            console.log('file copy successfully..!!')
            }    

})

}


setInterval(fileBackup,4000)




