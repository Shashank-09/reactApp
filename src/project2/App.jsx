import React, { createContext } from "react";

import ComB from "./ComB";

const FirstName = createContext();
const LastName = createContext();
const age = createContext();

const App = () =>{
   return(
    <>
      <FirstName.Provider value={"shashank"}>
        <LastName.Provider value={"tulsikar"}>
            <age.Provider value={"21"}>
               <ComB />
            </age.Provider>
         </LastName.Provider>
      </FirstName.Provider>
    </>
   )
}

export default App;
export { FirstName , LastName , age };