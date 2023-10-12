import React, { useState } from 'react'
import './style.css';
const TodoList = () => {

    const [inputData, setInputData] = useState();
    const [items , setItems] = useState([]);
     
    const addItem = () =>{
        if(!inputData){

        }else{
            setItems([...items , inputData]);
            setInputData('');
        }
    }

    const deleteItem = (id) => {
       const updatedItem = items.filter((elem , ind) => {
           return ind !== id;
       })
       setItems(updatedItem);
    }
    const removeAll = () => {
        setItems([]);
    }
   
  return (
    <>
       <div className='main-div'>
         <div className='child-div'>
           <figure>
            <img src="" alt="todologo" />
            <figcaption>Add Your List Here</figcaption>
           </figure>
         <div className='addItems'>
              <input 
              type="text"
              placeholder='✍ Add Items...'
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value)
              }}
              />
              <i className="fa fa-plus add-btn" title='Add Item' onClick={addItem}></i>
         </div>
         <div className='showItems'>
            {
                items.map((elem ,ind) => {
                   return(
                    <div className='eachItem' key={ind}> 
                    <h3>{elem}</h3>
                    <i className="fa  fa-trash-alt add-btn" title='Delete Item' onClick={() => deleteItem(ind)}></i>
                    </div>
                   )  
                })
            }
           
         </div>
         <div className='showItems'>
                 <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
         </div>
         </div>
       </div>
    </>
  )
}

export default TodoList