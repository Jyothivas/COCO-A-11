
class stack{
    constructor(){
        this.store = [];
    }

    push(value){    
        if(value===''){     
            return 'enter number value';       
        }
        this.store.push(value);
        return value+' added';  
    }

    pop(){
        if(this.store.length==0){
            return 'array is empty';
        }
        return this.store.pop()+' removed';
    }
}
module.exports = stack;