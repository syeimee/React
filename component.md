## useReducer
useStateの書き換えに利用

useStateとusereduceの違い

・useStateは利用する側に更新の仕方を託す

```js
const[state,setState] = useState(0);//初期値しか渡さない


const countUp = () =>{
  setState((prev) => prev +=1 );//setStateを呼ぶ利用側が更新を定義
}
```

・usereducerは状態側に更新の仕方を託す
→アプリケーションが大きくなると管理がしやすい
```js
const[rstate, dispatch] = useReducer((prev, {type,step})=> {
  switch(type){
    case "+":
      return prev += step
    case "-":
      return prev -= step
    default:
      throw new Error("不適切な設定です")
  }
});

  const rcountUp = () =>{
    dispatch({type: "+",step: 3});//actionを引数で指定
  }
  const rcountDown = () =>{
    dispatch({type: "-",step: 200});//actionを引数で指定
  }

```


reducerにtype,payloadのactionをまとめた例

```js
import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, {type, payload}) => {
  switch (type){
    case 'change':
      return {...state, [payload.name]: payload.value};
    case 'add':
      return {...state, result: state.a + state.b};
    case 'minus':
      return {...state, result: state.a - state.b};
    case 'divide':
      return {...state, result: state.a / state.b};
    case 'multiply':
      return {...state, result: state.a * state.b};
    default:
      throw new Error("不明なタイプです。");
  }
}

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({type: e.target.value})
  };

  const numChangeHandler = (e) => {
    dispatch ({type: 'change',payload:{name: e.target.name, value:
    parseInt(e.target.value)}})
  }

  return (
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((calc) =>{
          return(<option key={calc} value = {calc}>{calc}</option>)
        })}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;

```