import { VStack, StackDivider, HStack,IconButton, Text } from "@chakra-ui/react";
import {VscCheck} from "react-icons/vsc";
const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
            divider ={<StackDivider/>}
            width =  "80%"
            bgcColor = "white"
            borderColor = "black.100"
            borderWidth = "1px"
            borderRadius = "3px"
            padding = {5}
            alignItems="start"
        >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id} spacing ="5">
                        <IconButton 
                        onClick={() => complete(todo.id)} 
                        icon = {<VscCheck/>} 
                        isRound = "true"
                        bgColor="cyan.100"
                        >完了</IconButton >
                        <Text>{todo.content}</Text>
                    </HStack>
                )
            })}
        </VStack>
    );
}

export default List;