import React from "react";
import { Button, Table } from "reactstrap";

function View() {
    return (
<div className="container text-center my-4"><h1 className="display-5 my-4">View Todo List</h1>
    <div className="row table">
        <div className="col-3">Id</div>
        <div className="col-3">Name</div>
        <div className="col-3">Email</div>
        <div className="col-3">Action</div> 
    </div>
        <div className="row table" >
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            {/* <div className="col-3"><button className="btn btn-outline-danger" >remove</button></div>  */}
        </div>

    </div>
    );
  }
  
  export default View;