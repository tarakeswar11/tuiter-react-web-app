import React from 'react';
import Adding from './es5-functions';
import ArrowFunctions from './ArrowFunctions';
import ImpliedReturn from './implied-return';
import Paranthesis from './function-parenthesis-and-parameters';


function WorkingWithFunctions() {
   
    return(
      <div>
        <h2>Working With Functions</h2>
        <Adding/>
        <ArrowFunctions/>
        <ImpliedReturn/>
        <Paranthesis/>
        
       
      </div>
    );
  }
  export default WorkingWithFunctions