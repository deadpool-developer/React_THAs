import React, {useState} from "react";

const UsingHooks = () => {
    const [counter, setCounter] = useState<number>(0);
    return(
       <>
       <button style = {{marginLeft: "20px"}}
       onClick = {() => {
           setCounter(counter+1);
       }}>
           {counter}
       </button>
       </>
    )
};

export default UsingHooks;