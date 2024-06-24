import { useContext } from "react";
import { MyContext } from "../Example";
MyContext
const OtherChild = () => {
  const[,setState] = useContext(MyContext);
  const clickHandler = (e) => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
      <h3>{value}</h3>
    </div>
  );
};

export default OtherChild;
