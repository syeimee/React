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






## styled-components

読み込み方法
```js
import styled from "styled-components";
```

記述方法
```js
const  コンポーネント名 = styled.htmlタグ名`
------CSSをここに記述------
この中にプロパティを渡す場合は、${}として渡す。
`;
```

ボタンにCSSを当てる場合
```js
const StyledButton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background: ${(props) =>  props.isSelected ? 'pink' : ''};
`;

```

```js
<StyledButton>ボタン</StyledButton>
```

<img src="Button.png">

継承をする場合
```js
const 継承先コンポーネント名 = styled(継承元コンポーネント名)`
------CSSをここに記述------
この中にプロパティを渡す場合は、${}として渡す。
`;
```

```js
const OrangeButton = styled(StyledButton)`
  background-color: orange;
`;
```

擬似クラスを使用する場合は&:hoverのように記述

```js
const OrangeButton = styled(StyledButton)`
  background-color: orange;

  &:hover {
    color: red;
  }
`;
```

サイト全体で適応する場合は、外部CSSをインポートする
それ以外はstyled-componentsが推奨される


## CSSフレームワーク(ChakuraUI)
https://v2.chakra-ui.com/docs/styled-system/theme
https://v2.chakra-ui.com/getting-started/cra-guide
https://v2.chakra-ui.com/docs/styled-system/theme?scroll=true#spacing


```js
import { 使用するコンポーネント名} from "@chakra-ui/react";
```
```js
import { VStack, StackDivider } from "@chakra-ui/react";
const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
            divider ={<StackDivider/>}
            color = {{sm:'red.600',md:'blue.600',lg:'green.500',xl:'red.600'}}
            borderColor = "black.100"
            borderWidth = "1px"
            borderRadius = "3px"
            padding = {5}
            alignItems="start"
        >
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <button onClick={() => complete(todo.id)}>完了</button>
                        <span>{todo.content}</span>
                    </div>
                )
            })}
        </VStack>
    );
}

export default List;
```