import React, { useState } from 'react';
import '../Admin/Sing.css';
import { NavLink } from 'react-router-dom';
const Singup = () => {
    const [data,setData]=useState([]);
    const [error,setError]=useState({
        email:false,
        password:false,
      });
      //ragex end
      const [user,setUser]=useState({
        name:"",
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
      localStorage.setItem("staunch",JSON.stringify([...data,user]));
    }
     }
    
  return (
    <>
    <div className='container'>
      <input type='text' name='name'  placeholder='username'
       value={user.name}
      onChange={(e)=>handleChange(e)}
      />
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
      <p className='mt-3'>Already Have an Accoun<span> <NavLink to="/Login">login</NavLink></span></p>
    </div>
    </>
  );
};

export default Singup;
