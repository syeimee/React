
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  //animalsの要素をanimalとして受け取る
  const helloAnimals = animals.map((animal) => <li>hello,{animal}</li>)
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
          {/* {helloAnimals} */}
          {/* for文はjsxに記述できないが、mapならできるので、Reactではしばしばこちらを使用する */}
          {animals.map((animal) => <li key = {animal}>hello,{animal}</li>)}
      </ul>
    </>
  );
};

export default Example;