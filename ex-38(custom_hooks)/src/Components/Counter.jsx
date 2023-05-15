import { useCounter } from "./useCounter";

// componente a cui applico l'hook
export function Counter({initialValue }){
//chiamo il custom hook:(CONSUMER)
const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)
    return (
      <>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>INCREMENT</button>
        <button onClick={onDecrement}>DECREMENT</button>
        <button onClick={onReset}>RESET</button>
      </>
    );
}



