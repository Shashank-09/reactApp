import React, { useState } from "react";
import Button from '@mui/material/Button';
const CreateNote = (props) => {
    const [note , setNote] = useState({
        title:'',
        content: '',
    });
   
    const InputEvent = (event) =>{
        const {name , value} = event.target;
        setNote((prevData) => {
            return{
                ...prevData,
                [name] : value,

            }
        })
    }
    const addEvent  = () =>{
       props.passNote(note);
       setNote({
        title:'',
        content: '',
    });
    }
    

  return(
    <>
    <div className="main_note">
      <form>
           <input 
             name="title"
             value={note.title}
             onChange={InputEvent}
             type="text" 
             placeholder="Title"
             />
           <textarea
               name="content"
               value={note.content}
               onChange={InputEvent}
               rows="" 
               column=""
               placeholder="Write a note...">
            </textarea>
           <Button onClick={addEvent} variant="contained">Add Notes</Button>
      </form>
    </div>
    </>
  )
}

export default CreateNote;
