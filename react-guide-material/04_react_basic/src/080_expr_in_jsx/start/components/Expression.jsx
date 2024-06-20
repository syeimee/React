import "./Expression.css";

const Expression = () =>{
    const title = "Expression";
    const arr = ["item1","item2","item3"];
    //{ }を使用してJSの式を埋め込むことができる
    const hello = (arg) => `${arg} Function`;
    const jsx = <h3>Hello JSX</h3>;
    return(
        <div className = {title.toLocaleLowerCase()}> 
            <h3>Hello {title}</h3> 
            <h3>{arr}</h3>
            <h3>{hello('hello')}</h3>
            <h3>{/*画面上に表示はされない */}</h3>
            {<h3>Hello JSX</h3>}
            {jsx}
        </div>
    )
}
export default Expression;