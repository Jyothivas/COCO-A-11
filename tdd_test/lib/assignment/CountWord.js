class CountWord{
    
    strWord(str){
        if(str==' '||str==''){
            return 0;
       }
       let temp = str.trim().split(/\s+/);
        return temp.length;
    }
}
module.exports=CountWord;