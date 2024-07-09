import { useState } from 'react';
import Card from './Card.jsx';

export default function Hand({ round, cardsInHand }) {

  let cards = [];
  for (let i=1; i<=round; i++) {
    cards.push(i);
  };

  const [closed, setClosed] = useState(false);

  function close() {
    setClosed(true);
  }


  return(
    closed ?
    <div>Closed!</div> :
    <div className="hand">
      <div className="cards">
        {cards.map((card) => (
            <Card round={round} />
        ))}
      </div>
      <button onClick={close}>
        Close
      </button>
    </div>
  )
};