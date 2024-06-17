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
