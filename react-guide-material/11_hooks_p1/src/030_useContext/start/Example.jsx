import Child from "./components/Child";
import {createContext} from "react";
export const MyContext = createContext('hello');
const Example = () => {
  const value = 'hello'
  return <Child value={value}/>;
};

export default Example;
