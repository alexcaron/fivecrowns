
import Hand from './Hand.jsx';

export default function App() {

  const numOfHands = 13;
  const firstHandCardCount = 3;
  let rounds = [];
  for (let i=3; i<=numOfHands; i++) {
    rounds.push(i);
  };

  return(
    <div className="all-hands">
      {rounds.map((round) => (
          <Hand round={round} />
      ))}
    </div>
  )
}