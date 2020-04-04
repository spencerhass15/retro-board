import React, { useState } from 'react';
import Card from "./Cards"

function Board(props) {
    //const [state, setState] = useState([])
    const createNew = () => {
        // console.log(props.board);
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

            <div>

                {props.state.map((card, index) => {
                    if (card.board === props.board) {
                        return (

                            <Card
                                card={card}
                                color={'#dcdcdc'}
                                board={props.board}
                                state={props.state}
                                setState={props.setState}

                            />

                        );
                    }
                })}

            </div>
        </div>

    )


}

export default Board;
