import React, { useState } from "react";
import Button from '@mui/material/Button';


const Counter = () => {

    const [count , setCount ] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        if(count > 0){
        setCount(count - 1)
        }else{
            setCount(0);
            alert("Zero limit reached")
        }
    }

 return(
    <>
     <div className="main_div">
        <div className="center_div">
            <h1> {count} </h1>
            <div className="bth_div">
                <button onClick={handleClick}>Increment</button>
                <Button variant="text"
                   onClick={Decrement} 
                >Text</Button>
            </div>
        </div>
     </div>
      
    </>
 )
}

export default Counter;