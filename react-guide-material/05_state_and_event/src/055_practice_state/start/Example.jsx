import {useState} from "react";
const Example = () => {
  const [ count, setCount] = useState(0);
  const countUp = () =>{
    setCount (state => state + 1);
  };
  const countDown = () =>{
    setCount(state => state - 1);
  };
  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick = {countUp}>+</button>
      <button onClick = {countDown}>-</button>
    </>
  );
};

export default Example;
