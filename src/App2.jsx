import React from "react";
import SlotM from "./SloatM";

const App2 = () => {
    return(
        <>
        <h1 className="haeding_style">
            Welcome to sloat Machine
        </h1>
        <div className="sloatmachine">
            <SlotM  x='ab' y='ab' z='ab'/>
            <hr />
            <SlotM  x='ab' y='abc' z='ab'/>
            <hr />
            <SlotM  x='ab' y='ab' z='ab'/>
            <hr />

        </div>
        </>
    )
}
export default App2;