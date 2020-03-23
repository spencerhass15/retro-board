import React, { useState } from "react";


function Card(props) {

  const boards = ["wentWell", "toImprove", "actionItem"];
  const sendLeft = (idx) => {

    const stateCopy = [...props.state]

    let board = ""
    if (stateCopy[idx].board === boards[0]) {
      board = boards[2]
    }
    else {
      board = boards[boards.indexOf(stateCopy[idx].board) - 1]
    }

    stateCopy[idx].board = board


    props.setState(stateCopy)
  }
  const remove = index => {

    props.setState(props.state.filter(card => card.id !== index))
  };
  const sendRight = (idx) => {

    const stateCopy = [...props.state]

    let board = ""
    if (stateCopy[idx].board === boards[2]) {
      board = boards[0]
    }
    else {
      board = boards[boards.indexOf(stateCopy[idx].board) + 1]
    }

    stateCopy[idx].board = board


    props.setState(stateCopy)
  }


  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);

  return (

    <>
      <div className="-card pt-3">

        <div className="mt-3">

          <div className="">

            <div className="p-5" style={{ backgroundColor: props.color }}>
              <span>{props.card.name}</span>
              <textarea />
              <div className="d-flex justify-content-between p-2">
                <button
                  onClick={() => sendLeft(props.card.id)}
                >
                  {" "}
                  <i className="fas fa-caret-left left" title="" />
                </button>
                <i className="fas fa-thumbs-up fa-2x" onClick={() => setUp(up + 1)}>
                  {up}
                </i>
                <i className="fas fa-trash-alt fa-2x" onClick={() => remove(props.card.id)} />
                <i
                  className="fas fa-thumbs-down fa-2x pl-3"
                  onClick={() => setDown(down + 1)}
                >
                  {down}
                </i>
                <button
                  onClick={() => sendRight(props.card.id)}
                >
                  {" "}
                  <i className="fas fa-caret-right right" title="" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
  //   }
}

export default Card;
