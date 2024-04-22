import { useState } from 'react';

export default function Hand({ round, cardsInHand }) {

  return (
    <div className="hand">
      <div className="card">
        {`I am a card for round ${round}`}
      </div>
    </div>
  );

};