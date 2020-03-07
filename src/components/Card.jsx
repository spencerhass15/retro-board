import React from "react";
import PropTypes from "prop-types";

function Card(props) {
    const [title, setTitle] = React.useState(props.state.title)
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
    console.log(props.state)

    return (
        <div className={`${props.className || ""} card card-body bg-warning`}>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    aria-label="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="input-clear"
                />
                <button onClick={handleTitle}>Add</button>

            </div>

        </div>
    );
}



export default Card;
