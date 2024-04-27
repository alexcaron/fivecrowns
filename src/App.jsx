
import Hand from './Hand.jsx';

export default function App() {

  const numOfHands = 13;
  let rounds = [];
  for (let i=1; i<=numOfHands; i++) {
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