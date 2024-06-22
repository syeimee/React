import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal,setFilterVal] = useState("");
  return (
    <>
      <h3>配列のフィルター</h3>
      <ul>
        <input type="text" value={filterVal} onChange={(e)=>
        setFilterVal(e.target.value)}/>
        {animals
          // 不一致:-1
          .filter(animal => animal.indexOf(filterVal)!= -1)
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
