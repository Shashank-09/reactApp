import React, { useEffect, useState } from "react";

const UseEffect = () =>{
    const [count , setCount ] = useState(0);

    useEffect(() => {
        document.title=`You clicked me ${count}`
    })
    return(
     <button onClick={() => {
           setCount(count+1);
     }}>Click Me {count} </button>
    )
}

export default UseEffect;