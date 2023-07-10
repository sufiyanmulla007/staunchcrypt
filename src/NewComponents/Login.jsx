import React, { useState } from 'react';
import './Login.css';
const Login = () => {
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
    console.log(e.target.value);
    // const {value,name}=e.target;
    // console.log(name,value);
    setUser({...user,[e.target.name]:e.target.value})
 }
 const handleAdd =()=>{
  // sample validation
  // const {email,password}=user;
  // if(email===""){
  //   alert("enter yor email");
  // }else if(password===""){
  //   alert("enterpass");
  // }
  //end sample validation
  // setUser(user);
  // console.log(user);
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passReg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
if(!regEmail.test(user.email)){
  setError({...error,email:true})
}else if(!passReg.test(user.password)){
  setError({...error,password:true})
}else{
  console.log("now you are officially a developer...");
}
 }

  return (
    <>
    <div className='container'>
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
      <button className='btns'onClick={()=>handleAdd()}>login</button>
    </div>
    </>
  );
};

export default Login;
