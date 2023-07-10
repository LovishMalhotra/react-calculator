import React,{useState} from 'react';
import "./App.css";

function App(){
    const [result,setResult] = useState("");

    function handleClick(event){
        if(result === "0" && event.target.name === "0" ){
            return setResult("0");
        }
        if(result === "0" && event.target.name === "."){
            return setResult(result + ".");
        }
        if(result.toString().includes(".") && event.target.name === "."){
            return ;
        }
        if(result === "0" && event.target.name !== "0"){
            return setResult(event.target.name);
        }
        setResult(result + (event.target.name));
        
    }

    function clear(){
        setResult("0");
    }

    function plusMinus(){
        setResult(result*-1);
    }

    function percentage(){
        setResult(result/100);
    }

    function calculate(){
        try{
            // eslint-disable-next-line 
            setResult(eval(result).toString());
        }
        catch(err){
            setResult("Error");
            clear();
        } 
    }

    return (
    <div className = "container">
        <form>
            <input type = "text" value = {result} />
        </form>

        <div className='keypad'>
            <button onClick = {clear} id = "clear">C</button>
            <button onClick = {plusMinus} id = "backspace" >+-</button>
            <button name = "%" onClick = {percentage} >&#37;</button>
            <button name = "/" onClick = {handleClick} >&divide;</button>
            <button name = "7" onClick = {handleClick} >7</button>
            <button name = "8" onClick = {handleClick} >8</button>
            <button name = "9" onClick = {handleClick} >9</button>
            <button name = "*" onClick = {handleClick} >&times;</button>
            <button name = "4" onClick = {handleClick} >4</button>
            <button name = "5" onClick = {handleClick} >5</button>
            <button name = "6" onClick = {handleClick} >6</button>
            <button name = "-" onClick = {handleClick} >&ndash;</button>
            <button name = "1" onClick = {handleClick} >1</button>
            <button name = "2" onClick = {handleClick} >2</button>
            <button name = "3" onClick = {handleClick} >3</button>
            <button name = "+" onClick = {handleClick} >+</button>
            <button name = "0" onClick = {handleClick} >0</button>
            <button name = "." onClick = {handleClick} >.</button>
            <button className= "highlight" onClick = {calculate} id = "result" >=</button>
        </div>
    </div>
    );
}

export default App;