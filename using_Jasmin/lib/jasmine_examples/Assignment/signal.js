
class Signals{
    
    constructor(initialState)
    {
        this.initialState=initialState;  
    }

    next()
    {
      if (this.initialState == 'red') 
      {
        this.initialState='green';
        return "green";
      }
      else if(this.initialState=='green')
      {
        this.initialState='yellow';
        return "yellow";
      }
      else if(this.initialState=='yellow')
      {
        this.initialState="red";
        return "red";
        
      }
      else if(this.initialState=='')
      {
        return "Enter any signal";
      } 
    }

}
module.exports = Signals;

