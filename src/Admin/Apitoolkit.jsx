import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../store/slice/userslice';

const Apitoolkit = () => {
 const dispatch=useDispatch();
 const data= useSelector((state)=>{
  console.log(state.user);
  return state.user.products

 });
 if(data.loading){
  return<h2>loading...</h2>;
 }
 if(data.error !=null){
  return <h4>{data.error}</h4>;
 }
  return (
    <div style={{justifyContent:"center",textAlign:"center"}}>
      <h1>api called toolkit</h1>
      <button onClick={()=>dispatch(getAllData())}>getData</button>
      {
        data.products?.map((el)=>(
        <li>{el.title}</li>
        ))
      }

    </div>
  );
};

export default Apitoolkit;

