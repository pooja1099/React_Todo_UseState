import React, { useState } from "react";
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    };
    const handleFormSubmit = (event) => {

        event.preventDefault();

        if (newTodo.trim() === "") return;
        setTodos([...todos, newTodo]);

        setNewTodo("");
    };
    return (
        <div>
            <div className="heading">
              <h2>Todo List...</h2>
            </div>
            
            <form onSubmit={handleFormSubmit}>
                <div className="input_css">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={handleInputChange}
                        placeholder="Enter a new todo"
                        // class="form-control"
                        // aria-describedby="basic-addon2"
                    />
                    <div className="button_css">
                        <button type="submit">
                            Add To Do
                        </button>
                    </div>
                </div>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        {/* /<button onClick={() => handleTodoDelete(index)}>Delete</button>  */}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TodoList;


