import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
    //é possível utilizar sintaxe de callbacks:
    //setCounter((c)=>c + 1);
  };
  return (
    <div className="App">
      <h4>Contador: {counter}</h4>
      <button
        onClick={() => {
          handleCounter();
        }}
        type="button"
      >
        Incrementar
      </button>
    </div>
  );
}

export default App;
