import { useEffect, useState } from "react";


const Todo = () => {

    const[todos,setTodos] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => response.json())
            .then((data) => setTodos(data))
    },[])

    return ( 
        <div>
            <ul>
                {todos && todos.forEach(todo => {
                    <li>
                        {todo.title}
                    </li>
                })}
            </ul>
        </div>
     );
}
 
export default Todo;