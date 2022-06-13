import './App.css';
import NumberPreseneter from './NumberPreseneter'
import NumberModifier from './NumberModifier'
import { useCounter } from './CounterProvider'


function App() {
  const {value, decrement, increment} = useCounter()
  return (
    <div className="App">
      <p>Change the value</p>
      <button onClick={decrement}>-</button>
      <p>Value:{value}</p>
      <button onClick={increment}>+</button>
      <NumberPreseneter />
      <NumberModifier />
    </div>
  );
}

export default App;
