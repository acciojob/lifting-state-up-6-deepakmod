import React, { useState } from 'react';
import Child from './Child';

function Parent(){

    let [todos, setTodos] = useState([{todo:"Learn React",status:"incomplete"},{todo:"Build a React app",status:"incomplete"},{todo:"Deploy the React app",status:"incomplete"}]);

    function updateTodo(index){
        todos.map(function(todo,i){
            if(i === index){
                todo.status = true;
            }
        })
        setTodos([...todos]);
    }

    return  <div>
        <h1>Parent Component</h1>
        <Child todos={todos} changeStatus={updateTodo} />
    </div>
}

export default Parent;