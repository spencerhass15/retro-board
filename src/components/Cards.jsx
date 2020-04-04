import React, { useState } from "react";


function Card(props) {
  const [title, setTitle] = useState(props.card.title);

  const boards = ["wentWell", "toImprove", "actionItem"];
  const sendLeft = (idx) => {
    const stateCopy = [...props.state]
    stateCopy.forEach(card => {
      if (card.id === props.card.id) {
        const index = boards.indexOf(props.board) - 1 < 0 ? 2 : boards.indexOf(props.board) - 1
        card.board = boards[index]

      }
    })

    props.setState(stateCopy)
  }
  const remove = index => {
    props.setState(props.state.filter(card => card.id !== index))

    setTitle(props.state.forEach(card => {
      if (card.id === props.card.id) {
        return card.title
      }
    }))

  };

  React.useEffect(() => {
    setTitle(props.card.title);
  }, [props.card])
  // const [index, setIndex] = useState()
  // React.useEffect(()=>{
  //   props.setState(props.state.filter(card => card.id !== index))
  // },[index])



  const sendRight = (idx) => {
    const stateCopy = [...props.state]
    stateCopy.forEach(card => {
      if (card.id === props.card.id) {
        const index = boards.indexOf(props.board) + 1 > 2 ? 0 : boards.indexOf(props.board) + 1
        card.board = boards[index]
      }
    })


    props.setState(stateCopy)
  }


  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);

  const handleTitle = () => {

    const stateCopy = [...props.state]
    stateCopy.forEach(card => {
      if (card.id === props.card.id) {
        card.title = title
      }
    })

    props.setState(stateCopy);

  }

  return (

    <>
      <div className="-card pt-3">

        <div className="mt-3">

          <div className="">

            <div className="p-5" style={{ backgroundColor: props.color }}>
              <span>{props.card.name}</span>

              <input value={title} placeholder={props.card.id} onChange={e => setTitle(e.target.value)} />
              <button onClick={handleTitle}>save</button>
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

}

export default Card;
