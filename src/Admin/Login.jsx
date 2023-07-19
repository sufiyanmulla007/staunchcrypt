import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dis= useNavigate();
    const [error,setError]=useState({
        email:false,
        password:false,
      });
      //ragex end
      const [user,setUser]=useState({
        email:"",
        password:"",
      });
     const handleChange=(e)=>{
        // console.log(e.target.value);
        // const {value,name}=e.target;
        // console.log(name,value);
        setUser({...user,[e.target.name]:e.target.value})
     }
     const handleAdd =()=>{
    const getuserArr = localStorage.getItem("staunch");
    console.log(getuserArr);
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passReg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(!regEmail.test(user.email)){
      setError({...error,email:true})
    }else if(!passReg.test(user.password)){
      setError({...error,password:true})
    }else{
      if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        // console.log(userdata);
        const userlogin = userdata.filter((el,i)=>{
         return el.email === user.email && el.password === user.password
        });
        // console.log(userlogin);
        if(userlogin.length ===0){
            alert("invalid details")
        }else{
            alert("Successfull Login");
            dis('/Dishbord');
        }
      }
    }
     }
  return (
    <>
    <div className='main-container'>
    <div className='containe'>
      <input type='text' name='email'  placeholder='email'
       value={user.email}
      onChange={(e)=>handleChange(e)}
      />
      <div>
        {
          error.email?
          <div className='error'>Please enter valid email</div>
          :null
        }
      </div>
      <input type='password' name='password' placeholder='password'
       value={user.password}
       onChange={(e)=>handleChange(e)}
      />
      <div>
        {
          error.password?
          <div className='error'>Please enter valid password</div>
          :null
        }
      </div>
      <button className='btns' onClick={()=>handleAdd()}>login</button>
    </div>
    </div>
    </>
  );
};

export default Login;
