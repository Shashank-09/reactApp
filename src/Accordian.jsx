import React, { useState } from "react";
import { question } from "./AccApi";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AccData from "./AccData";

const Accordian = () => {
    const [data , setData] = useState(question);

  return(
    <> 
    <section>
        <h1>React Interview Question</h1>
    {data.map((currElem) => {
    const { id  } = currElem;
       return <AccData  key={id} {...currElem} />
    })}
    </section> 
    </>
  )
}

export default Accordian;