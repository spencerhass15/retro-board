import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "../src/components/Card";
import Board from "../src/components/Board";




function App() {
  const [cards, setCards] = useState([
    {
      title: "",

    },
    {
      title: "",

    },
    {
      title: "",

    }
  ]);
  const setTitle = (index, title) => {
    const newCards = [...cards];
    newCards[index] = {
      ...newCards[index],
      title: title
    };
    setCards(newCards);
  };

  return (
    <>
      <Board cards={cards} setCards={setCards}>
        {cards.map((card, index) => {
          return (

            <Card
              setTitle={title => setTitle(index, title)}
              cards={cards}
              setCards={setCards}
              key={`card-${index}`}
              className="mb-2"
            />

          );
        })}
      </Board>
    </>
  );
}


export default App;
