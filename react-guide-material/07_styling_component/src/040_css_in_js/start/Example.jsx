import { useState } from "react";
import styled from "styled-components";


const StyledButton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background: ${(props) =>  props.isSelected ? 'pink' : ''};
`;
const OrangeButton = styled(StyledButton)`
  background-color: orange;

  &:hover {
    color: red;
    opacity:0.7;
  }
`;
const NestButton = styled(OrangeButton)`
  span{
    font-size: 2em;
  }
`;
const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick ={clickHandler}>ボタン</StyledButton>
      <OrangeButton isSelected={isSelected} onClick ={clickHandler}>ボタン</OrangeButton>
      <NestButton isSelected={isSelected} onClick ={clickHandler}><span>ボタン</span></NestButton>
      <button
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
