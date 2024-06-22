## useStateを使用するときの注意点
useStateの呼び出しは必ずトップレベルで（if文の中などでない）呼び出す必要がある。
以下を実行し、consoleを確認してみると、
```js
import {useState} from "react"

const Example = () =>{
  console.log(<Example/>);
  const[ countA, setCountA] = useState(0);
  const[ countB, setCountB] = useState(10);
  const[ countC, setCountC] = useState(100);
  return(
    <>
        <p>ボタンAを{countA}回押しました！</p>
        <button onClick = {() =>{
            setCountA(countA + 1);
        }}>ボタンA</button>

        <p>ボタンAを{countB}回押しました！</p>
        <button onClick = {() =>{
            setCountB(countB + 1);
        }}>ボタンB</button>

        <p>ボタンAを{countC}回押しました！</p>
        <button onClick = {() =>{
            setCountC(countC + 1);
        }}>ボタンC</button>
    </>
  )
}
```
memoizedStateのnextに値が保持されていることがわかる。
 <img src="/Users/yuu/Library/Mobile Documents/com~apple~CloudDocs/development/React/react-guide-material/useState.png">

if文やloop文などを用いてuseStateの実行順序を変えてしまうと、エラーとなってしまう。

## stateはコンポーネント毎に状態（値）を保持する
コンポーネントに紐づく値はそれぞれ独立して管理される
React要素のツリー内の位置によってどこのコンポーネントのstateか識別している。
以下の例では、countAとcountBを別々の値としてコンポーネントが保持しているので、togleの切り替えをしても値は保持される。
```js
import { useState } from "react";

const Example = () => {
  const[toggle, setToggle] = useState(true);
  const[countA, setCountA] = useState(0);
  const[countB, setCountB] = useState(0);
  const toggleComponent = () =>{
    setToggle(prev => !prev)
  }
  return(
    <>
    <button onClick = {toggleComponent}>toggle</button>
    {toggle ? <Count key = "A" title = "A" count = {countA} setCount={setCountA}/> : <Count  key = "B" title = "B" count = {countB} setCount={setCountB}/>}
    </>
  )
}
const Count = ({title,count,setCount}) =>{
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}:{count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

```


## 配列のリスト表示

```js

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  //animalsの要素をanimalとして受け取る
  const helloAnimals = animals.map((animal) => <li>hello,{animal}</li>)
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
          {/* {helloAnimals} */}
          {/* for文はjsxに記述できないが、mapならできるので、Reactではしばしばこちらを使用する */}
          {animals.map((animal) => <li key = {animal}>hello,{animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
```

keyは一意に定まるものをつける。このkeyがあることでReactが再レンダリングの差分比較を行い、変更がある箇所のみを更新(commit)できる。

　　　　　　　　　　　再レンダリング
・key = "js"      ・key = "ruby" 
・key = "ruby"    ・key = "python"
・key = "Java"    ・key = "Go"
                  ・key = "Java"

差分比較の結果key="Go"のcommitを行う。

条件分岐
```js
import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
            //if文ver
            // if(animal == "Dog"){
            //   return (<li key={animal}>{animal + "★"}</li>)
            // } else{
            //   return (<li key={animal}>{animal}</li>)
            // }

            //三項演算子ver
            // return <li key ={animal}>{
            //   animal + (animal =="Dog" ? "★" : "")
            // }</li>
            //Reactでは真偽値は表示されないことを利用する
            // animal == "Dog"がfalseになると表示されない
            return(<li>{animal}{animal == "Dog" && "★"}</li>)

            //NULL合体演算子
            //A ?? B 
            //Aがnullかundefinedの時にはBの値をとりそれ以外ならAの値を取る
          
          })
        }
      </ul>
    </>
  );
};

export default Example;

```