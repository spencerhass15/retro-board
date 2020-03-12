import React, { useState } from "react";


function Cards() {
  const [count, setCount] = useState(0);
  const [down, setDown] = useState(0);
  const [cards, setCards] = useState([{ name: "" }]);
  const [newCard, setNewCard] = useState("");


  const add = card => setCards([...cards, card]);

  const remove = index => {
    setCards([...cards.slice(0, index), ...cards.slice(index + 1)]);
  };

  const handleAddClick = () => {
    if (newCard === "") {
      return;
    }
    add({ name: newCard });
    setNewCard("");
  };

  return (
    <>
      <div className="">
        {cards.map((card, index) => {
          return <Card card={card} onRemove={() => remove(index)} />;
        })}
      </div>
      <div className="-card">
        <input
          type="text"
          value={newCard}
          onChange={event => setNewCard(event.target.value)}
        />
        <button onClick={handleAddClick}>Add new</button>
        <div>
          <i class="fas fa-thumbs-up" onClick={() => setCount(down + 1)}>{count}</i>
          <i class="fas fa-thumbs-down" onClick={() => setDown(down + 1)}>{down}</i>
        </div>
      </div>
    </>
  );
}

function Card({ card, onRemove }) {
  return (
    <div className="">
      <span>{card.name}</span>
      <button onClick={onRemove}>Remove</button>

    </div>
  );
}


//     const [title, setTitle] = useState(props.state.title)

//     const handleTitle = () => {
//         const newState = [...props.state];
//         const newCard = {
//             title: title
//         };

//         props.setState([
//             ...newState,
//             newCard
//         ]);
//     };

//     // const setTitle = (index, title) => {
//     //     const newCards = [...cards];
//     //     newCards[index] = {
//     //         ...newCards[index],
//     //         title: title
//     //     };
//     //     setState(newCards);
//     // };
//     // const deleteFromList = indexToDelete => {
//     //     setTitle(
//     //         [...title].filter((item, index) => index !== indexToDelete)
//     //     );
//     // };


//     console.log(props.state)

//     return (
//         <div className={`${props.className || ""} card card-body bg-warning`}>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Title"
//                     aria-label="Title"
//                     value={title}

//                     onChange={e => handleTitle(e.target.value)}
//                     className="input-clear"
//                 />
//                 <button onClick={handleTitle}>Add</button>
//                 <button
//                     aria-label="Delete"
//                     title="Delete"
//                     className="btn"

//                 >
//                     Delete
//                 </button>
//                 <h1>{count}</h1>
//       <h1>{down}</h1>
//       <button onClick={() => setCount(count + 1)}>Like</button>
//       <button onClick={() => setDown(down + 1)}>Dislike</button>
//             </div>

//         </div>
//     );
// }



export default Cards;
