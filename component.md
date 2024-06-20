## propsの書き換えは原則行えない

```js
const Hello = (props) => {
  /* props.nameの書き換えをしているので
     これはエラーになる*/
  props.name = "John";

  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
```
propsの状態を確認する方法

```js
const desc = Reflect.getOwnPropertyDescriptor(props,'name');
console.log(desc);
```

結果
```bash
configurable: false
enumerable: true
value: "TOM"
writable: false
```
configurable：　隠し設定を変更できるか
enumerable：for...inのloopで列挙対象になるか
writable：　値の書き換えができるか


```js
const element = (
    <h1>
```




## useState
画面が変更されるためには
・再レンダリング（コンポーネントの再実行）
・変更した値をstateに保存

する必要がある。

```js
const Example = () =>{
  let displayVal;
  return (
    <>
      <input
        type = "text"
        onChange = {(e) =>{
          displayVal = e.target.value
        }}/> = {displauyVal}
    </>  
  );
};

export default Example;
```

## useStateの役割と使い方

```js
const[現在の値, 更新関数] = 初期値

const[val, setVal] = useState(0)

//値を更新したい場合は、更新関数を用いる
setVal(1)
```


具体例(これはExampleそのものが再実行される)
```js
import { useState } from 'react';

const Example = () => {
  let [val, setVal] = useState();
  console.log("再レンダリングされたよ")
  return (
    <>
      <input
        type = "text"
        onChange = {(e) =>{
          console.log(e.target.value);
          setVal(e.target.value);
        }}
      />
       ={val}
    </>
  );
};

export default Example;

```