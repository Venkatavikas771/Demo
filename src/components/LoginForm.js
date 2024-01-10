import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function LoginForm() {

  const[formData,setFormData]=useState({
    userName:'',
    password:'',
});
//handle change event
const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value});
};


//handle submit event
const handleSubmit = async(e) =>{
    
    //api called to backend server and it will give respond back
try{
    const response=await fetch("http://localhost:8080/login",{
        method:"POST",
        headers:{
         "Content-Type":"application/json"
        },
        body:JSON.stringify(formData),
    });
        if(response.status === 200){
          console.log("Login Successfull");
          console.log(response.body)
          document.write("api call was made successfully");
        }
        //navigate to different page
        else{
         console.log('something went wrong');
        }
    

}catch(error){
    console.log('something went error');
console.log(error);
}
    
};


return (
<div>
    <form onSubmit={handleSubmit}> 

        <label>
            userName:
            <input type="text" name="userName" value={formData.userName} onChange={handleChange}/>
        </label>
        <br/>
        <label>
            password:
            <input type="password" name="password" value={formData.password} onChange={handleChange}/>
        </label>
        <br/>
        <button type="submit"> Log in</button>
    </form>
</div>
)
}

export default LoginForm