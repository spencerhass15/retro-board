import React, { useState } from "react";
import Board from "./components/Board";




function RetroBoard() {
    const [state, setState] = useState([])
    return (
        <div className="container">
            <div className="row text-center">
                <Board className="col-md-3 text-center p-5" title="Went Well" board="wentWell" state={state} setState={setState} />
                <Board className="col-md-3 text-center p-5" title="To Improve" board="toImprove" state={state} setState={setState} />
                <Board className="col-md-3 text-center p-5" title="Action Item" board="actionItem" state={state} setState={setState} />

            </div>
        </div>
    )

}




export default RetroBoard