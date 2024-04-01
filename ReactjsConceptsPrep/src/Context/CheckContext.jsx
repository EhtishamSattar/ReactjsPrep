import { createContext,useContext } from "react";

const CheckContext=createContext();

export function tryContextHook(){
    return useContext(CheckContext);
}

export const UseContextHookProvider=({children})=>{
    let message={
    message1: "1.Context Hook checking ... ",
    message2: "2.Context Hook checking ... "
    };
    
    return <CheckContext.Provider value={message}>{children}</CheckContext.Provider>
}

