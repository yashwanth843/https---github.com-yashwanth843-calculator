import {useState} from 'react'
import { evaluate } from 'mathjs';

import './index.css'

const Home = () => {
    const [number,setNumber] = useState('')
    const onchangeInput = e => {
        setNumber(e.target.value)
    }
    const onClickButtons = (num) => {
        setNumber(number + num)
    }

    const onClickClear = () => {
        setNumber("")
    }

    const onClickDelete = () => {
        setNumber(number.slice(0,-1))
    }

    const result = () => {
        setNumber(evaluate(number))
    }
    
    return (
    <div className='bg-container'>
        <div className='cardContainer'>
            <input type='text' value={number} className='input-element' onChange={onchangeInput}/>
            <div className='buttons-Container'>
                <button type='button' className="buttons" onClick={onClickClear} id="unquie">AC</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('%') } id="unquie">%</button>
                <button type='button' className="buttons" onClick={onClickDelete} id="unquie">DEL</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('/') } id="unquie">/</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('7') }>7</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('8') }>8</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('9') }>9</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('*') } id="unquie">X</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('4') }>4</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('5') }>5</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('6') }>6</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('-') } id="unquie">-</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('1') }>1</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('2') }>2</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('3') }>3</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('+') } id="unquie">+</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('00') }>00</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('0') }>0</button>
                <button type='button' className="buttons" onClick={() =>onClickButtons('.') }>.</button>
                <button type='button' className="buttons" onClick={result} id="unquie">=</button>
            </div>
        </div>
    </div>
    )
}

export default Home