import React from "react";
import All from './All'

const Heading = () =>{
    return(
        <div className="side-heading">
            <div>
            <h1 style={{fontSize:"20px"}}>My Todos</h1>
            </div>
            <div>
                <All/>
            </div>


        </div>
    )
}

export default Heading