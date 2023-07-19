import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../store/slice/userslice';

const Apitoolkit = () => {
 const dispatch=useDispatch();
 const data= useSelector((state)=>{
  console.log(state.user);
  return state.user.products

 });
  return (
    <div>
      <h1>api called toolkit</h1>
      <button onClick={()=>dispatch(getAllData())}>getData</button>
      {/* {data.products.map((el)=>(
        <li>{el.title}</li>
      ))} */}
      {data.products.map((ele)=>(
        <li>{ele.title}</li>
      ))}
    </div>
  );
};

export default Apitoolkit;

