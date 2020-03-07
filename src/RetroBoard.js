import React, { useState } from "react";
import Board from "./components/Board";




function RetroBoard() {
    const [state, setState] = useState([])
    return (
        <div>
            <Board title="Went Well" board="wentWell" state={state} setState={setState} />
            <Board title="To Improve" board="toImprove" state={state} setState={setState} />
            <Board title="Action Item" board="actionItem" state={state} setState={setState} />


        </div>
    )

}




export default RetroBoard