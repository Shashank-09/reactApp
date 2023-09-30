import React from "react";
import { FirstName, LastName , age} from "./App";
const ComC= () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <age.Consumer>
                                        {(sage) =>{
                                              return <h1>my name is {fname} {lname} {sage} </h1>
                                        }}
                                    </age.Consumer>
                                )
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}

export default ComC;