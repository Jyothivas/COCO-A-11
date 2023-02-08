import {Component, React} from "react";
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state={
      data:"anil"
    }
  }
  updateData(){
    this.setState({data:"sidhu"});
  }
  render(){
    return(
      <div>
    <h1>Hello {new Date().toLocaleTimeString}</h1>
    <button onClick={()=>this.updateData()} >update data</button>
  </div>
  );
}
}

export default App;
