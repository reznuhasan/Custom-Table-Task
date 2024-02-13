import { createContext, useState } from "react";


export const ColumnVisibilityContext=createContext()

export const ColumnVisibilityProvider=({children})=>{
    const [columnVisibility, setColumnVisibility]=useState({
        title:true,
        categories:true,
        price:true,
        date:true,
        author:true,
        status:true,
        action:true,
    })
    return (
        <ColumnVisibilityContext.Provider value={{columnVisibility, setColumnVisibility}}>
            {children}
        </ColumnVisibilityContext.Provider>
    )
}
