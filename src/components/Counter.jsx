import React from 'react';
import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);
    return (
        <div className='counter'>
            <span className='number'>{number}</span>
            <button className='button'
                onClick={()=>{
                        // setNumber(number + 1)}
                        setNumber((prev)=>(prev + 1))}
                }>Add +</button>
        </div>
    );
}

