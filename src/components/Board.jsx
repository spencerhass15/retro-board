import React from "react";
import Cards from "./Cards"

function Board(props) {
    const createNew = () => {
        let id = 0;
        if (props.state.length > 0) {
            id = props.state[props.state.length - 1].id + 1;
        }
        props.setState([
            ...props.state,
            {
                title: '',
                id: id,
                likes: 0,
                board: props.board
            }
        ])
    }
    return (
        <div className="col-md-4">
            <h2>{props.title}</h2>
            <button onClick={createNew}>+</button>
            {console.log(props.state)}
            <div>
                {props.state.map((card, index) => {
                    if (card.board === props.board) {
                        return (card.board === props.board &&
                            <Cards
                                key={index}
                                state={props.state}
                                setState={props.setState}
                                board={props.board}
                                index={index}
                            />
                        )
                    }
                })}
            </div>
        </div>

    )


}

export default Board;
