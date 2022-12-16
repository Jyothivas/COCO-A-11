class ToggleCase{

    convertToggle(str){
        let tempStr='';
        if(str==' ' || str==''){
            return 'Enter a string';
        }
        for(let i=0;i<str.length;i++){
            if(str.charCodeAt(i)>=97){
                tempStr+= str[i].toUpperCase();
            }
            if(str.charCodeAt(i)<=90){
                tempStr+= str[i].toLowerCase();
            }
        }
        return tempStr;
    }
 
}

module.exports=ToggleCase;