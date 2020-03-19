import React, { useState } from "react";


function Cards() {

  const [cards, setCards] = useState([{ name: "" }]);
  // const [newCard, setNewCard] = useState("");


  // const add = card => setCards([...cards, card]);

  const remove = index => {
    setCards([...cards.slice(0, index), ...cards.slice(index + 1)]);
    //setCards([]);
  };

  // const handleAddClick = () => {
  //   if (newCard === "") {
  //     return;
  //   }
  //   add({ name: newCard });
  //   setNewCard("");
  // };

  return (
    <>

      <div className="-card pt-3">
        {/* <textarea
          type="text"
          value={newCard}
          onChange={event => setNewCard(event.target.value)}
        /> */}
        {/* <button onClick={handleAddClick}>Add Text</button> */}
        <div className="mt-3">
          {/* <i className="fas fa-thumbs-up fa-2x" onClick={() => setCount(down + 1)}>{count}</i>
          <i className="fas fa-thumbs-down fa-2x pl-3" onClick={() => setDown(down + 1)}>{down}</i> */}
          <div className="">
            {cards.map((card, index) => {
              return <Card card={card} color={'#dcdcdc'} onRemove={() => remove(index)} />;
            })}
          </div>
        </div>

      </div>
    </>
  );
}

function Card({ card, onRemove, color }) {
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);
  return (
    <div className="p-5" style={{ backgroundColor: color }}>
      <span>{card.name}</span>
      <textarea />
      <div className="d-flex justify-content-between p-2"><i className="fas fa-thumbs-up fa-2x" onClick={() => setUp(up + 1)}>{up}</i>
        <i className="fas fa-trash-alt fa-2x" onClick={onRemove}></i>
        <i className="fas fa-thumbs-down fa-2x pl-3" onClick={() => setDown(down + 1)}>{down}</i>
      </div>


    </div>
  );
}

export default Cards;
