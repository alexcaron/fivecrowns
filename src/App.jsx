
import Hand from './Hand.jsx';

export default function App() {

  // const numOfHands = 13;
  let rounds = [1,2,3,4,5];
  // for (let i=1; i<=numOfHands; i++) {
  //   rounds.push['here'];
  // };
  return(
    <div class="hands">
      {rounds.map((round) => (
          <Hand round={round} />
      ))}
    </div>
  )
}