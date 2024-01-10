import React, { useState } from 'react'

function DemoUse() {
const[count, setCount]=useState(0)

const[name, setName]=useState('Spring sessions');

const handleIncrement =() =>{
    setCount(count+1);
};

const handleDcrement =() =>{
    setCount(count-1);
};
const handleChange =() =>{
    setName('React sessions')
}
  return (
    <div>DemoUse
    <p>First use state</p>
    <p>My count is {count}</p>
    <button onClick={handleIncrement}>Increase count</button>
    <button onClick={handleDcrement}>Drecement count</button><br/>
    <h1>My course is {name}</h1>
    <button onClick={handleChange }>change session</button>
    
    </div>
  )
}

export default DemoUse