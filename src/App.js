import { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };
  return (
    <div className="App">
      <div>{number}</div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
