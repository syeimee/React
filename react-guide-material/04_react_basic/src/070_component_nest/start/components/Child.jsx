import "./Example.css" //Example.cssにCSSを記述する
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
