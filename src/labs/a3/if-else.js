import React from 'react';

let true1 = true
    let false1 = false
    let false2 = true1 && false1
    let true2 = true1 || false1
    let true3 = !false2
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let true4 = numberVariable === 123;
    let true5 = floatingPointNumber !== 321.432;
    let false3 = numberVariable < 100
    let sortaTrue = '1' == 1  // never use this ==
    let notTrue   = '1' === 1 // always use this ===

function IfElse() {
    console.log('If else');
 if(true1) {
    console.log('true1');
 }
 
 if(!false1) {
    console.log('!false1');
 } else {
    console.log('false1');
 }
 return(
    <div>
       <h2>If Else</h2>
       { true1 && <p>true1</p> }
       { !false1 ? <p>!false1</p> : <p>false1</p> }
    </div>
 );

}
  export default IfElse