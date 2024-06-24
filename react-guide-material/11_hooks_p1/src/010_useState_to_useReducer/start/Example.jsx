import {useState,useReducer} from "react";
const Example = () => {

  const[state, setState] = useState(0);
  const[rstate, dispatch] = useReducer((prev, {type,step})=> {
    switch(type){
      case "+":
        return prev += step
      case "-":
        return prev -= step
      default:
        throw new Error("不適切な設定です")
      }
    // if(action === "+"){
    //   return prev += 1
    // }else if(action === "-"){
    //   return prev -= 1
    // }
  },0);//useReducerは定義するときに指定


  const countUp = () =>{
    setState(prev => prev += 1); //useStateは使用するときに指定
  }
  const rcountUp = () =>{
    dispatch({type: "+",step: 3});//actionを引数で指定
  }
  const rcountDown = () =>{
    dispatch({type: "-",step: 200});//actionを引数で指定
  }

  return (
    <>
    <div>
      <h3>{state}</h3>
      <button onClick = {countUp}>+</button>
    </div>
    <div>
      <h3>{rstate}</h3>
      <button onClick = {rcountUp}>+</button>
      <button onClick = {rcountDown}>-</button>
    </div>
    </>
  );
};

export default Example;
