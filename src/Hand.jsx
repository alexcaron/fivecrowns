import { useState } from 'react';
import Card from './Card.jsx';

export default function Hand({ round, cardsInHand }) {

  let cards = [];
  for (let i=1; i<=round; i++) {
    cards.push(i);
  };

  return(
    <div className="hand">
      {cards.map((card) => (
          <Card round={round} />
      ))}
    </div>
  )
};