import React, {useState} from "react";


const Figure = () =>{
    const [word, setCounter] = useState('Круг')
    const circle = () =>{
        setCounter('Круг')
    }
    const square = () =>{
        setCounter('Квадрат')
    }
    return (
        <>
            <button onClick={circle}>Circle</button>
            <button onClick={square}>Square</button>
            <div>{word}</div>
        </>
    )
}
export default Figure;