import {useState} from "react";

const Todos =() =>{
    const [todos, setTodos] = useState([''])
    const [text, setText] = useState([''])
    const addText = (e) =>{
        setText(e.target.value)
    }
    const add = () =>{
        if (text.trim()){
            setTodos([...todos, text])
        }
        setText('')
    }
    const del = () =>{
        setTodos(todos.slice(0, -1))  //slice - дает массив
    }
    return(
        <>
            <button onClick={add}>Добавить дело</button>
            <button onClick={del}>Удалить последнее дело</button>
            <input onChange={addText} type="text" value={text}/>
            <ul>
                {todos.map((el,idx) =>
                    <li key={idx}>{el}</li>
                )}
            </ul>
        </>
    )
}
export default Todos;
