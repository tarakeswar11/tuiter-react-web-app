import React from 'react';

function FindIndex(){
    
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string3', 'string2' ];

    const fourIndex = numberArray1.findIndex(a => a === 4);
                            
    const string3Index = stringArray1.findIndex(a => a === 'string3');
   
    

    return (
        <>
        <h2>Findndex Function</h2>
        fourIndex = {fourIndex}<br />
        string3Index = {string3Index }<br />
     </>
    );
}
  export default FindIndex