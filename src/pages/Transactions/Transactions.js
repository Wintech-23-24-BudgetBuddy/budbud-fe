/*import React, {useState} from 'react'
import {TodoForm} from './TodoForm';
import {v4 as uuidv4} from 'uuid';
uuidv4();
import {Todo} from './Todo';

export const Transactions = () => {

  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
  }

  return (
    <div className='Transactiions'>
      <TodoForm addTodo={addTodo}/>
      <Todo />
    </div>
  )
}

export default Transactions;
*/

import React, { useState } from "react";

const Transactions = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, {text: newTodo.trim(), checked: false}]);
            setNewTodo("");
        }
    };

    const handleDeleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    return (
        <div>
            <hl>Transactions</hl>
            <div>
              <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
              <button onClick={handleAddTodo}>Add</button>
              <ul>
                  {todos.map((todo, index) => (
                      <li key={index} style={{display: "flex"}}>
                        <div style={{display: "flex", alignItems:"center"}}>
                        <span style={{marginRight: "10px"}}>
                            {todo.text}
                          </span>
                          <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                        </div>
                          
                      </li>
                  ))}
              </ul>
            </div>
        </div>
    );
}

export default Transactions;
