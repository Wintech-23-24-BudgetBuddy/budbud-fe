import React, { useState } from "react";

const Transactionlist = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, {text: newTodo.trim(), checked: false}]);
            setNewTodo("");
        }
    };


    return (
        <div>
            <hl>Transactions</hl>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input type="checkbox" checked={todo.checked}>
                        </input>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Transactionlist;