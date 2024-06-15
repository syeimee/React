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

アロー関数でもコンポーネントを定義できる
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


