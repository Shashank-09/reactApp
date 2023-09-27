import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListComponent from "./ListComponent";

const MUItodolist = () => {
    const [item , setItem] = useState("");
    const [newitem , setNewItem] = useState([

    ]);

    const itemEvent = (event) =>{
        setItem(event.target.value)
    }

    const listofItems = () => {
        setNewItem((prevValue) => {
          return [...prevValue , item]
        })
        setItem("");
    }

     return(
        <>
          <div className="main_div">
            <div className="center_div">
                <br />
                <h1> ToDo List </h1>
                <br />
                <input
                  value={item}
                  type="text"
                  placeholder="Add an items"
                  onChange={itemEvent}
                 > 
                </input>
                <Button className="newBtn" onClick={listofItems} >
                      <AddIcon />  
                </Button>
                <br />
                <ol>
                    {newitem.map((val, index) =>{
                       return  <ListComponent key={index} text={val} />
                    })}
                </ol>
                <br />
            </div>
          </div>
        </>
     )
} 

export default MUItodolist;

