import Item from "../components/Item"
const List = ({todos, deleteTodo, updateTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <div>
            {todos.map(todo => {
                return (
                    <Item 
                        key = {todo.id} 
                        todo = {todo}
                        complete = {complete}
                        updateTodo = {updateTodo}
                        />
                )
            })}
        </div>
    );
}

export default List;