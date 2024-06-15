## コンポーネント（Component）
画面の各構成要素をReactで定義したもの

### 利点
再利用性の向上（コードが使いまわせる）
可読性の向上（コードが整理される）
疎結合になる（バグを減らせる）

### コンポーネントの定義
コンポーネントは JavaScriptの関数として定義する


```js
//定義
function Welcome(){
return <h1> Hello </h1>; // コンポーネントはJSXを返す
}
//実行
<Welcome/>
```

実際にHTML内で使用してみる。
```html
<!DOCTYPE html>
<html>
<head>
    <script src="../../../../libs/react.development.js"></script>
    <script src="../../../../libs/react-dom.development.js"></script>
    <script src="../../../../libs/babel-standalone.js"></script>
</head>
<body>
    <div id="app">  </div>
    
    <!-- type="text/babel"とすることでhtmlタグの使用が可能となる -->
    <script type="text/babel">

        //対象elementを指定する
        const appEl = document.querySelector("#app");
        const root = ReactDOM.createRoot(appEl);
        
        //コンポーネント(先頭は必ず大文字で記述　小文字だとhtmｌタグと誤認識される)
        function Example(){
            return <h1>Hello React </h1>;
        }

        root.render(<Example />);

    </script>
</body>
</html>
```

アロー関数でもコンポーネントを定義できる。
```js
const Example = ()=>{
　return <h1>Hello React </h1>;
}

//関数の中身がreturnのみだと省略できる
const Example = () => <h1>Hello React </h1>
```


### Reactプロジェクトの作成
[Vite](https://ja.vitejs/dev/)というモジュールハンドラーを使ったプロジェクトの作成

```bash
npm create vite@latest
```

プロジェクトディレクトリに移動して

```bash
npm install
```

```json
{
  "name": "vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  /*------------------------------   
  scriptsのところにコマンドが書いてある
  ------------------------------  */
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "vite": "^5.2.0"
  }
}
```

  dev: ローカルサーバー立ち上げ
  build: 本番環境用ファイルの作成
  lint: コードチェック
  preview: ビルドしたコードを画面で確認

```bash
npm run dev
```
この画面が表示されると成功
<img src="vite.png" >

ctrl + Cでサーバー停止


## コンポーネントにスタイルを当ててみる
reactでは「className」としてクラスを記述する。
これはJavaScriptでのclassと混在しないようにするため。

```js
import "./Example.css" //Example.cssにCSSを記述する
const Example = () => {
  //改行するためにはreturnの後を( )で囲む
  return (
    <div className = "component">
      <h3>Hello Component</h3>
    </div>
  );
};
export default Example;

```


## コンポーネントの分割方法

今回は以下のソースのulタグ部分を分割してみる
```js
import "./Example.css" 
const Example = () => {
  return (
    <div className = "component">
        <h3>Hello Component</h3>
        <ul>
            <li>item-1</li>
            <li>item-2</li>
            <li>item-3</li>
            <li>item-4</li>
            <li>item-5</li>
        </ul>
    </div>
  );
};
export default Example;

```

同じディレクトリ内にcomponentsというディレクトリを新しく作成し、コンポーネントファイルを作成

```js
const List = () => {
    return (
        <ul>
            <li>item-1</li>
            <li>item-2</li>
            <li>item-3</li>
            <li>item-4</li>
            <li>item-5</li>
        </ul>
    )
}

//外部ファイルで使用可能にする
export { List }

```

```js
import "./Example.css" 
import{ List } from "./components/List" //コンポーネントの読み込み
const Example = () => {
  return (
    <div className = "component">
      <h3>Hello Component</h3>
      <List/>　//コンポーネントの呼び出し
    </div>
    
  );
};
export default Example;

```

より細かく分割していく。 componentsディレクトリに先ほどのコードをChildというコンポーネントとして、作成。

```js
import "./Example.css" //Example.cssも同じディレクトリに移動
import{ List } from "./List"
const Child = () => {
  return (
    <div className = "component">
      <h3>Hello Component</h3>
      <List/>
    </div>
  );
};

export default Child;

```

最終的にここまで細かくできる。
```js
import{ Child } from "./components/Child"
const Example = () => <Child/>;
export default Example;

```

## React.Fragment
jsxを使用する際には returnの中身をdivタグで囲む必要がある。
ただ、無駄にdivタグを書いてしまうし、ブロック要素を入れたくない時にはかえって邪魔になる。
そこで、Raact.Fragmentを使用することで、html上ではdivタグにならずにjsxもエラーにならない。
```js
import React from "react" //Reactのパッケージのデフォルトエクスポート
const Example = () =>{
    return (
        <React.Fragment> //これはHTMLのタグとして読み込まれない
            <div>
                <h3> Hello Component </h3>
            </div>
            <p> hogehogehogehoge</p>
        </React.Fragment>　//これはHTMLのタグとして読み込まれない
    )
}
```

ちなみにReactパッケージを名前付きのインポートにすると
```js
import {Fragment} from "react" //Reactのパッケージのデフォルトエクスポート
const Example = () =>{
    return (
        <Fragment> //これはHTMLのタグとして読み込まれない
            <div>
                <h3> Hello Component </h3>
            </div>
            <p> hogehogehogehoge</p>
        </Fragment>　//これはHTMLのタグとして読み込まれない
    )
}
```

さらにFragmentは省略できる。
```js
import {Fragment} from "react" //Reactのパッケージのデフォルトエクスポート
const Example = () =>{
    return (
        <> //Fragmentの省略
            <div>
                <h3> Hello Component </h3>
            </div>
            <p> hogehogehogehoge</p>
        </>　//Fragmentの省略
    )
}
```

### 補足
Fragmentに関しては、HTMLタグとして読み込むことができないため、基本的には属性をつけることはできない。
ただし「key」という属性はつけることができる。このkeyはループ処理で使用する。

```js
import {Fragment} from "react" 
const Example = () =>{
    return (
        <Fragment key = ''> 
            <div>
                <h3> Hello Component </h3>
            </div>
            <p> hogehogehogehoge</p>
        </Fragment>　
    )
}
```

## JavaScriptを埋め込んでみる
JSの式は{ }を使用することで埋め込みをすることができる。
今回はタイトルとCSSに対して式を埋め込んだ。
ちなみに、JSのメソッドも使用することができる。
toLocaleLowerCase()は全てを小文字にするメソッド。

```js
import "./Expression.css";

const Expression = () =>{
    const title = "Expression";
    const arr = ["item1","item2","item3"];
    //{ }を使用してJSの式を埋め込むことができる
    const hello = (arg) => `${arg} Function`;
    const jsx = <h3>Hello JSX</h3>;
    const bool = true;

    return(
        <div className = {title.toLocaleLowerCase()}> 
            <h3>Hello {title}</h3> 
            <h3>{arr}</h3>
            <h3>{hello('hello')}</h3>
            <h3>{/*画面上に表示はされない */}</h3>
            {<h3>Hello JSX</h3>}
            {jsx}
            {bool}
        </div>
    )
}
export default Expression;
```
### 補足
booleanの値は画面上には出力されない。

## 式と文
jsx内では式のみ使用することができる。
式と文の違い
・式：　何らかの値を返すもの（変数に代入できるもの）

```js
const expression1 = 1;
const expression2 = () => 'function';
const expression2 = 1 === 1; //表示はされないが使用はできる。
```

・文：　変数宣言、for文、if文、switch文やセミコロンで区切るもの。

```js
const statement1　= const hoge = 1
const statement2 = if(hoge = true){ ...}
```

三項演算子は式なので、jsx内でも使用できる。
```js
const sanko = true ? 'hello' : 'bye';
```

## コンポーネントに値を渡す

このようにして値をコンポーネントに渡すことができる。
この場合は、propsのcolorをredとしているので、classNameにredが渡され
赤色に変化する。

```js
import "./Child.css";

const Child = (props) => {
  return (
    <div className= {`component ${props.color}`}>
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
```

```js
import Child from "./components/Child";

const Example = () => {
    return(
        <>
            <Child color= "" />;
            <Child color= "red" />;
        </>
    )
}
export default Example;

```

```css
.App-start .component{
  padding: 1rem;
  color: blue;
  border: 5px solid blue;
}
.App-start .component.red{
  padding: 1rem;
  color: rgb(255, 0, 0);
  border: 5px solid rgb(255, 0, 0);
}

```

JavaScriptの分割代入を行うこともできる。

```js
import "./Child.css";

const Child = ({color}) => {
  return (
    <div className= {`component ${color}`}>
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
```
デフォルト値を設定する場合
```js
import "./Child.css";

const Child = ({color = 'green'}) => {
  return (
    <div className= {`component ${color}`}>
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
```
