// POINT propsの流れは一方通行
// POINT propsは読み取り専用

import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  const props = {
    name: "TOM"
  }
  return (
    <>
      <Hello {...props}/>
      <Bye {...props}/>
    </>
  );
};

export default Example;
