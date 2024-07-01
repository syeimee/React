import {useState} from "react";

export const useCount = () => {   
    const [state, setState] = useState(0);

    const countUp = () =>{
        setState((prev) => prev + 1);
    }

    return{countUp,state}
}

