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


