import React, {useEffect, useState} from "react";
import axios from 'axios'
import Todo from './Todo'
import TodoForm from './TodoForm'
import "../css/TodoList.css";




/* 
            HOOKS Notes:

1. Convert from class to functional component
2. remove the renders, we just need a return
3. Import useeffect and useState
4. Change initial state with useState
5. Change componentDidMount into useEffect
6. Change our functions to const.  ALWAYS change ur functions to const
7. Remove the "this" and "state" from functions 



useEffect is only used when fetching data
*/




const TodoList = () => {

//setting up initial state in a hooks way
  const [todos, setTodos] = useState([
    {id: 1, text: "Code for 1 hour every day", compete: false},
    {id: 2, text: "Watch youtube tutorials", compete: false},
    {id: 3, text: "Add to previous apps", compete: false},
    {id: 4, text: "Apply for new jobs in my area", compete: false},
    {id: 5, text: "Prep for interview", compete: false},
    {id: 6, text: "Network", compete: false},
    {id: 7, text: "Add friends on LinkedIn", compete: false},
    {id: 8, text: "Find new job matches", compete: false},
    {id: 9, text: "Ask for referrals", compete: false},
  ])





// use effect runs everytime the component loads 
  // useEffect(()=> {
  //   axios.get('https://appian-mock.herokuapp.com/todos').then((response)=>{
  //     setTodos(response.data)
  //   })
  // },[])
// theres an empty [] because we didnt make any changes to the setTodos



 //this is spreading, aka making a new copy of the todo and adding to it, the new variable will be added to the front
  const addTodo = (newTodo) =>{
    setTodos([newTodo, ...todos])
  }

  



//this passes Id and toggles the compete field from false to true & vice versa

  const toggleComplete = (id) =>{
    setTodos(todos.map((todo)=>{  
      if(todo.id ===id){
        return{
          //this is spreading the todo array again
          ...todo,
          //make the todo opposite value
          compete: !todo.compete
        };
      } else{
          return todo;
        }
    })
    )
  }


  const deleteTodo = id =>{
    setTodos(todos.filter((todo)=> todo.id !==id))
  }  

 
 
    return (
      <div id="test">
        <TodoForm addTodo ={addTodo}/>
        {/* todos is the array, and the todo is each item in the array. we just want the text to be returned. */}
        {todos.map(todo =>(
         
          <Todo key={todo.id} text={todo.text} compete ={todo.compete} toggleComplete={()=>toggleComplete(todo.id)} deleteTodo={()=> deleteTodo(todo.id)}/>
          ))}
          <br/>
        <div id="left"> 
          {/* show me all the todos that are left on the list */}
          Items Left: {todos.filter((todo)=> !todo.compete).length}
        </div>
        </div>
    )
  }


export default TodoList;
