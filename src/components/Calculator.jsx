import React, { useState } from 'react';
import {useSelector, useDispatch}from 'react-redux';
import {sum, subtract} from '../store/Calculator/Calaculatar.actions';


function Calculator() {
    const dispatch = useDispatch();
    
    const result = useSelector(state => state.calculator);

    const [a,setA] = useState(0);
    const [b,setB] = useState(0);

    return (
        <>
            <input type='text' 
                 placeholder='A'
                 onChange={(e)=> setA(Number(e.target.value))}
                 value={a === 0 ?'' : a}
            
            />
            <input type='text' 
                placeholder='B'
                onChange={(e)=> setB(Number(e.target.value))}
                value={b === 0 ? '': b}
            
            />

            <button 
              onClick={()=>{
                  dispatch(sum(a,b));
              }
                  
              }
            >Somar</button>
            <button
                onClick ={() => dispatch(subtract(a,b))}
            
             >
                 Subtrair</button>

            <div>
               {result}
            </div>
        </>

    );
}


export default Calculator;