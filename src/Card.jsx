import { useState } from 'react';

export default function Card({ round, card }) {

  return (
    <div className="card">
      {`I am a card for round ${round}`}
    </div>
  );

};