import React, { useState } from "react";

const Example=(props)=> {
    
   
        console.log(props)
      return <div>
        <div>Children121 </div>
      {props.children}
      </div>
    }
  

export default Example;
