import React, { useState } from "react";
import PropTypes from "prop-types";

function Card(props) {

    const [title, setTitle] = useState(props.state.title)

    const handleTitle = () => {
        const newState = [...props.state];
        const newCard = {
            title: title
        };

        props.setState([
            ...newState,
            newCard
        ]);
    };

    const setTitle = (index, title) => {
        const newCards = [...cards];
        newCards[index] = {
            ...newCards[index],
            title: title
        };
        setState(newCards);
    };
    const deleteFromList = indexToDelete => {
        setTitle(
            [...title].filter((item, index) => index !== indexToDelete)
        );
    };


    console.log(props.state)

    return (
        <div className={`${props.className || ""} card card-body bg-warning`}>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    aria-label="Title"
                    value={title}

                    onChange={e => handleTitle(e.target.value)}
                    className="input-clear"
                />
                <button onClick={handleTitle}>Add</button>
                <button
                    aria-label="Delete"
                    title="Delete"
                    className="btn"
                    onClick={e => deleteFromList(e.target.value)}
                >
                    Delete
                </button>

            </div>

        </div>
    );
}



export default Card;
