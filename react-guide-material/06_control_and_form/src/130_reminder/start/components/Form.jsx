import { useState } from "react";
const Form = ({ createTodo }) => {
    const [enterdTodo, setEnterdTodo] = useState("");
    const addTodo = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            label: enterdTodo
        };
        createTodo(newTodo);
        setEnterdTodo("");
    }
    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                    value={enterdTodo}
                    onChange={(e) => { setEnterdTodo(e.target.value) }}
                    type="text"
                />
                <button>送信</button>
            </form>
        </div>
    );
}

export default Form;