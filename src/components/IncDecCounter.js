import * as React from 'react';


export function IncDecCounter({handleInc,handleDec,itemCount}) {
  
  return (
    <div className="incDec">
      <button className='incDecbtn' onClick={handleDec}>-</button>
      <input className='incDectxt' value={itemCount}/>
      <button className='incDecbtn' onClick={handleInc}>+</button>
    </div>
  );
}