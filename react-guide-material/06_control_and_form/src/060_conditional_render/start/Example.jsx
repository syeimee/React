import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
            //if文ver
            // if(animal == "Dog"){
            //   return (<li key={animal}>{animal + "★"}</li>)
            // } else{
            //   return (<li key={animal}>{animal}</li>)
            // }

            //三項演算子ver
            // return <li key ={animal}>{
            //   animal + (animal =="Dog" ? "★" : "")
            // }</li>
            //Reactでは真偽値は表示されないことを利用する
            // animal == "Dog"がfalseになると表示されない
            return(<li>{animal}{animal == "Dog" && "★"}</li>)

            //NULL合体演算子
            //A ?? B 
            //Aがnullかundefinedの時にはBの値をとりそれ以外ならAの値を取る
          
          })
        }
      </ul>
    </>
  );
};

export default Example;
