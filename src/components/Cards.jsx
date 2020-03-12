import React, { useState } from "react";
function Card() {
    const [cards, addCard] = useState([]);
    const [card, setCard] = useState("");
    const [count, setCount] = useState(0);
    const [down, setDown] = useState(0);
    return (
        <div>
            {card ? <div>You are going to add {card}</div> : <div />}
            <br />
            <input type="text" onChange={e => setCard(e.target.value)} value={card} />
            <button
                onClick={() => {
                    let arr = [...cards, card];
                    addCard(arr);
                    setCard("");
                }}
            >
                Add text
      </button>
            <div>
                <div>
                    {cards.map((crd, index) => (
                        <div key={index}>{crd} <button onClick={() => {
                            let arr = cards.filter((i, idx) => index !== idx);
                            addCard(arr);
                        }}>delete</button>
                            <div class="pt-3">

                                <i class="fas fa-thumbs-up fa-2x" onClick={() => setCount(count + 1)}></i>{count}
                                <i class="fas fa-thumbs-down fa-2x" onClick={() => setDown(down + 1)}></i>{down}

                            </div>
                        </div>
                    ))}

                </div>




            </div>
        </div>
    );
}
export default Card;
