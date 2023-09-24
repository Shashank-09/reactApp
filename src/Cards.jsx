import React from "react";
import Image from "./Image";

export default function Card(props){
    console.log(props);
    return(
    <>
  <div className="crads">
    <div className="card">
      <Image imgsrc={props.imgsrc} />
      <div className="card__info">
        <span className="card__category">{props.title}</span>
        <h3 className="card__title">{props.sname}</h3>
        <a href={props.link} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  </div> 
  </>
    )
  }