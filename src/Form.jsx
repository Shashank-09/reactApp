import React, { useState } from "react";

const Form = () => {

    const [name, setName] = useState()
    const [Fullname, setFullName] = useState();

    const [lastName , setLastName] = useState();
    const [showLast , setShowLast] = useState();

    const inputLast = (event) => {
        setLastName(event.target.value)
    }

    const inputEvent = (event) => {
        setName(event.target.value)

    }

   

    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name);
        setShowLast(lastName);
    }
    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                <h1>Hello {Fullname} {showLast} </h1>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={inputEvent}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Enter Your LastName"
                    onChange={inputLast}
                    value={lastName}
                />
                <button type="submit">Click Me</button>
                </form>
            </div>
        </>
    )
}
export default Form;