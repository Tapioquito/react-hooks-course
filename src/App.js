import P from 'prop-types';

import { useCallback, useEffect, useState } from 'react';
import './App.css';

const Button = ({ buttonText, handleCounter }) => {
  return (
    <button type="button" onClick={() => handleCounter(10)}>
      {buttonText}
    </button>
  );
};
Button.propTypes = {
  handleCounter: P.func,
  buttonText: P.string,
};
function App() {
  const [counter, setCounter] = useState(0);

  //useCallback(function,[array de depedndência])

  const handleCounter = useCallback((num) => {
    setCounter((c) => c + num);
    //é possível utilizar sintaxe de callbacks:
    //setCounter((c)=>c + 1);
  }, []);

  //componentDidUpdate -> Executa toda vez que o componente é atualizado
  useEffect(() => {
    console.log('Component did update');
  });

  //componentDidmount -> Executa 1 vez
  useEffect(() => {
    console.log('Component did MOUNT');
  }, []);

  //componentDidmount COM dependência: Executa toda vez que a dependência mudar.
  useEffect(() => {
    console.log('Contador mudou para: ', counter);
  }, [counter]);

  return (
    <div className="App">
      <h4>Contador: {counter}</h4>
      <Button
        buttonText="+"
        handleCounter={handleCounter}
        type="button"
      ></Button>
    </div>
  );
}

export default App;
