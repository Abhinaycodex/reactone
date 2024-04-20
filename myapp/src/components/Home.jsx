import React from 'react';
import { useState , useEffect } from 'react';

function Home() {
    const [inputvalue, setinputvalue] = useState(0);
    console.log(inputvalue);

    useEffect(()=>{
        console.log("useEffect");
    },[inputvalue])

    const increment = ()=>{
    setinputvalue(inputvalue)
    }

    const decrement = ()=> {
    setinputvalue(inputvalue)
    };

const btnstyle= {
    padding:20,
    backgroundcolor: "red",
    border: "none",
    borderRadius:10,
    margin:10,
}

    return (
    <div>
        <input style = {{padding:20 , border: "1px solid rgba(0,0,0,0.4)", borderRadius:20 }} type="number" placeholder='Enter your Name' 
        value={inputvalue} 
        onChange={
            (e)=>{
                setinputvalue(e.target.value)
            }
        }

        />

        <button style={btnstyle} onClick= {increment} >  +  </button>
        <button style={btnstyle} onClick= {decrement} >  -  </button>

    </div>
  )
}

export {Home}