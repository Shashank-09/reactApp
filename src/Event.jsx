import React, { useState } from "react";

 const Event = () => {

const purple = "#8e44ad";
const [bg , setBg] = useState(purple);
const [name , setName] = useState("Click me")

    const BgChane = () => {
     let newbg = "#34495e"
     setBg(newbg);
     setName('BXXXX!!!')
    }
    const back = () => {
        let newbg = "#8e44ad"
        setBg(newbg); 
        setName('Click Me')
    }

   
    return(
        <>
        <div style={{ background: bg}}>
            <button onClick={BgChane} onDoubleClick={back}>{name}</button>

        </div>
        </>
    )
}

export default Event;
