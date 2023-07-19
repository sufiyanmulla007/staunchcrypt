import React from 'react'

const Protected = (props) => {
    const {component}=props
  return (
    <div>
      <component/>
    </div>
  );
};

export default Protected;
