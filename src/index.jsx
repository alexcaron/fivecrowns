import React from 'react';
import ReactDOM from 'react-dom';
import Hand from './Hand.jsx';

function App() {
  return (
    <Hand round={4} />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);