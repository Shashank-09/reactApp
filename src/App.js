import React from "react";
import Card from "./Cards";
import './styles.css';
import Sdata from './Sdata';
import Netflix from "./Netflix";

const FavS = "Netflix"


const Fav = () => {

if(FavS === "Netflix"){
    return <Netflix />
}else{
    return(
        <Card 
        key= {Sdata[1].id}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
        />
      )
}

}

const App = () => (
    <>

    <h1 className="heading_style">Top 5 Netflix Series </h1>
    <Fav /> 
    </>
);

export default App;