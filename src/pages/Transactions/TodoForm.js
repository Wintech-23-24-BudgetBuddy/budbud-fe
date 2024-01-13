/*import React, {useState} from 'react';

export const TodoForm = ({addTodo}) => {

    const[value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>TRANSACTIONS
        <input type="text" className='todo-input' value={value}
        placeholder='Include your transactions here' onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}
*/