import React from 'react'
export default function colorswitch({onchangecolor}){
        return(
            <button onClick={e=>{
               e.stopPropagation();
               onchangecolor();
            }}>
                Change color
            </button>
        );
    }
