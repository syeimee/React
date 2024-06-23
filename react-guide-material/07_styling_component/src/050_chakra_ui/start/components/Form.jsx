import { useState } from "react";
import { HStack,Input, Button,useToast } from "@chakra-ui/react";
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const toast = useToast();
  const addTodo = (e) => {
    e.preventDefault();

    if(!enteredTodo){
      // toast関数にpropsを渡す
      toast({
        title: "新しいタスクを入力してください",
        status: "error",
        duration: 2000, //表示する時間
        isCosable: true //閉じるボタン
      })
      return;
    }


    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <HStack>
        <input
          placeholder="新しいタスク"
          _placeholeder = {{opacity: "0.3", color: "gray.500"}}
          type="text"
          padding = {3}
          bgColor = "white"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <Button
        colorScheme = "blue"
        size = "md"
        variant="outline"
        px = {7}
        type = "submit"
        bgColor = "white"
        >
        追加
        </Button>
        </HStack>
      </form>
    </div>
  );
};

export default Form;
