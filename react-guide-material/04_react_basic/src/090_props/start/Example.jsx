import Child from "./components/Child";

const Example = () => {
    const hello = (arg) =>{
        return `Hello ${arg}`;
    }
    const object ={
        color: "red",
        num: 123
    }
    return(
        <>
            {/* <Child color= "" />; */}
            {/* <Child color= "red" />; */}
            <Child 
                { ...object }
                fn = {hello} 
                bool
                obj ={{name: 'Tom', age: 18 }}
            />
        </>
    )
}
export default Example;
