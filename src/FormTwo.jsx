import React, { useState } from "react";

const FormTwo = () => {

    
    const [Fullname, setFullName] = useState({
        fname : "",
        lname: "",
        UserEmail: "",
        phone: "",
     
    });

    

    const inputEvent = (event) => {
        //  console.log(event.target.value)
        //  console.log(event.target.name);
         
        //  const value = event.target.value;
        //  const name = event.target.name;

        const {value , name} = event.target;

         setFullName((preValue) => {

            return {
                ...preValue,
                [name] : value,
            }
           /* if(name === "fName"){
                return{
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone : preValue.phone

                }
            }else if(name === "lName"){
                return{
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone : preValue.phone

            }

            }else if(name === "Uemail"){
                return{
                    fname : preValue.fname,
                    lname: preValue.lname,
                    UserEmail: value,
                    phone : preValue.phone

                }
            }else if(name === "phone"){
                return{
                    fname : preValue.fname,
                    lname: preValue.lname,
                    UserEmail: preValue.UserEmail,
                    phone: value,
                }
            }*/
    })

    }
   

    const onSubmit = (event) => {
        event.preventDefault();
       
    }
    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                <h1>Hello {Fullname.fname} {Fullname.lname} </h1>
                <p>{Fullname.UserEmail} {Fullname.phone}</p>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="fname"
                    onChange={inputEvent}
                    value={Fullname.fname}
                />
                <input
                    type="text"
                    placeholder="Enter Your LastName"
                    name="lname"
                    onChange={inputEvent}
                    value={Fullname.lname}
                />
                <input
                    type="email"
                    placeholder="Enter Your Email ID"
                    name="UserEmail"
                    onChange={inputEvent}
                    value={Fullname.UserEmail}
                />
                <input
                    type="number"
                    placeholder="Enter Your Phone Number"
                    name="phone"
                    onChange={inputEvent}
                    value={Fullname.phone}
                />
                <button type="submit">Click Me</button>
                </form>
            </div>
        </>
    )
}
export default FormTwo;