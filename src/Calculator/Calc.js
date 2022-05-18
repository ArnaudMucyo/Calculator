import React, {useEffect, useState} from "react";
import './Calc.css'


const Calc = () => {

 const [result,setResult] = useState(() => {
     const localData = localStorage.getItem("resultValue");
     return localData ? JSON.parse(localData) : [];
 });

const handleClick = (event) => {
    setResult(result.concat(event.target.name))
}

const clear = () => {
    setResult("");
}

const backspace = () => {
    setResult(result.slice(0,result.length-1));
}

const handleAns = (event) =>{
setResult(result.concat(event.target.value));
    console.log(result);

}

const calculate = () => {
    try {
        setResult(eval(result).toString());
    } catch (error) {
        setResult("Error");
    }


}

    useEffect(() => {
        localStorage.setItem('resultValue',JSON.stringify(result))
    },[result])



    return(
        <div>
            <h1 className="title">React Calculator</h1>
          <div className="calc_container">
              <form>
                  <input type="text" className="result_text" value={result} readOnly/>
              </form>

              <div className="keypad">
                  <button className="key_spec" onClick={clear}>Clear</button>
                  <button className="key_math" onClick={backspace}>C</button>
                  <button name="/" className="key_math" onClick={handleClick}>&divide;</button>
                  <button name="7" className="key" onClick={handleClick}>7</button>
                  <button name="8" className="key" onClick={handleClick}>8</button>
                  <button name="9" className="key" onClick={handleClick}>9</button>
                  <button name="*" className="key_math" onClick={handleClick}>&times;</button>
                  <button name="6" className="key" onClick={handleClick}>4</button>
                  <button name="5" className="key" onClick={handleClick}>5</button>
                  <button name="6" className="key" onClick={handleClick}>6</button>
                  <button name="-" className="key_math" onClick={handleClick}>&ndash;</button>
                  <button name="1" className="key" onClick={handleClick}>1</button>
                  <button name="2" className="key" onClick={handleClick}>2</button>
                  <button name="3" className="key" onClick={handleClick}>3</button>
                  <button name="+" className="key_math" onClick={handleClick}>+</button>
                  <button name="0" className="key" onClick={handleClick}>0</button>
                  <button name="." className="key" onClick={handleClick}>.</button>
                  <button name={result.value} value={result} className="key" onClick={handleAns}>Ans</button>
                  <button className="key_math" onClick={calculate}>=</button>
              </div>
          </div>

        </div>
    )
}

export default Calc;