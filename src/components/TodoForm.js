import React, { useState } from 'react';
import shortid from 'shortid';
import "../css/TodoForm.css";



const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('')

    const handleChange = event => {
        setText(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        addTodo({
            id: shortid.generate(),
            text: text,
            compete: false
        })
    }
        return(
            <form onSubmit={handleSubmit}>
                <input id="formText" name="text" value={text} onChange={handleChange} placeholder="add new item..."/>
                <button onSubmit={handleSubmit} className="addButton">+<i className="fas fa-plus"></i></button>
            </form>
        )
}



export default TodoForm