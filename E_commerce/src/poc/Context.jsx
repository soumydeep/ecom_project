import React from'react'
import { useContext } from 'react'


// created a context Wrapper
const ContextWrapper=React.createContext();

function Context(){
    return (
        <>
        {/* creater a provider for context wrapper and add value and wrap it around the parent
        and it will be availblwe to all its childs or child node */}
            <ContextWrapper.Provider value="Be _ safe">
                <GrandParent/>
            </ContextWrapper.Provider>
        </>
    )
}

function GrandParent(){
    const message=useContext(ContextWrapper);
    return (
        <>
            <h2>
                GrandParent
            </h2>
            <div>
                !!! 
            </div>
            <div>
                {message}
            </div>
            <Parent></Parent>
        </>
    )
}

function Parent(){
    const message=useContext(ContextWrapper);
    return (
        <>
            <h2>
                Parent
            </h2>
            <div>
                !!! 
            </div>
            <div>
                {message}
            </div>
        </>
    )

}
export default Context;