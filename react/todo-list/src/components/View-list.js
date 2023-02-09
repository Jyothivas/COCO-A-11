import React, { useState } from "react";
import { useSelector} from "react-redux";
import { Button, } from "reactstrap";


function View() {

    const user = useSelector((state)=>state);
    console.log(user);

    return (
        <div className="container text-center my-4"><h1 className="display-5 my-4">View Todo List</h1>
            <div className="row table">
                <div className="col-3">Id</div>
                <div className="col-3">Name</div>
                <div className="col-3">Email</div>
                <div className="col-3">Action</div>
            </div>
            <div className="row table" >
                {user.length > 0
                    ?user.map((item,index) =>
                        <>
                            <div className="col-3">{index+1}</div>
                            <div className="col-3">{item.name}</div>
                            <div className="col-3">{item.email}</div>
                            <div className="col-3"><Button color="danger" className="my-1" >remove</Button></div>
                        </>
                    )
                    : <div>No Data Available</div>}
            </div>
        </div>
    );
}

export default View;