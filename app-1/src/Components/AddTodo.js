import { useState } from "react";

const AddTodo = (props) => {
    const [todo, setTodo] = useState('');

    const handleAdd = () => {
        props.addTodoFn(todo);
        setTodo('');
    }

    return (
        <div>
            <input value={todo} 
                   placeholder='Enter Item' 
                   onChange={e => setTodo(e.target.value)} />
            <button onClick={() => handleAdd()}>Add Item</button>
        </div>
    )
}

export default AddTodo;