const List = ({todos,deleteTodo}) =>{
    const completed = (id) =>{
        deleteTodo(id);
    }
    return(
        <div>
            {todos.map((todo)=>{
                return(
                    <div key ={todo.id}>
                        <button onClick={() =>completed(todo.id)}>完了</button> 
                        <span>{todo.label}</span>    
                    </div>
                )
            })}        
        </div>
    )
}

export default List;