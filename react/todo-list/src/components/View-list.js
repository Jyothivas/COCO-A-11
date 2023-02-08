import React, { useContext } from "react";
import { Button, } from "reactstrap";
import Store from "../Store";


function View() {
   const context = useContext(Store);
   console.log(context.state);

    return (
        <div className="container text-center my-4"><h1 className="display-5 my-4">View Todo List</h1>
            <div className="row table">
                <div className="col-3">Id</div>
                <div className="col-3">Name</div>
                <div className="col-3">Email</div>
                <div className="col-3">Action</div>
            </div>
            <div className="row table" >
                {context.state.length > 0
                    ? context.state.map((item) =>
                        <>
                            <div className="col-3">{item.id}</div>
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