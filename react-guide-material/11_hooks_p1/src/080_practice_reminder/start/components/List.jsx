import Item from "../components/Item"
const List = () => {
    const todos = useTodos();
    return (
        <div>
            {todos.map(todo => {
                return (
                    <Item 
                        key = {todo.id} 
                        todo = {todo}
                    />
                )
            })}
        </div>
    );
}

export default List;