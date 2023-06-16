import React from 'react';

function Child({todos,changeStatus}){

    return <div>
        <h2>Child Component</h2>
        <ul>
            {todos.map((todo,index)=>(
                <li>{todo.todo} { todo.status==="incomplete" && <button onClick={()=>{changeStatus(index)}}>Complete</button>}</li>
            ))}
        </ul>
    </div>
}

export default Child;