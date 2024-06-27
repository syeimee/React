import {useState} from "react"
const Item = ({todo,complete,updateTodo}) => {
    const [editingContent, setEditingContent] = useState(todo.content);
    const changeContent = (e) =>  {
        setEditingContent(e.target.value);
    }
    const toggleEditMode = () => {
        debugger
        const newTodo = {...todo, editing: !todo.editing}
        updateTodo(newTodo);
    }
    return(
        <div key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            {todo.editing ? 
                (<input type ="text"
                value ={editingContent}
                onChange = {changeContent}></input>
                ): (<span onDoubleClick={toggleEditMode}>{todo.content}</span>)
            }
        </div>
    )
}

export default Item;