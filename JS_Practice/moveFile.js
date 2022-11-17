//"original"+date.getFullYear()+'-'+date.getDate()+'-'+date.getMonth()+'_'+date.getHours()+':'+date.getMinutes()+".txt"
let fs=require('fs')
let date=new Date();
let src="original.txt"
let des="test/original.txt"

fs.copyFile(src,des, function(error){

    if(error){
        console.log('getting error file not copy..')
    }
    else
            {
              fs.rename(des,`test/original_${date.getFullYear()}-${date.getDate()}-${date.getMonth()}-${date.getHours()}-${date.getMinutes()}.txt`, function(result){
                if(result){
                    console.log("error")
                }
                else{
                console.log("done")
                }
              });
            
                            
            console.log('file copy successfully..')
            }    

})


