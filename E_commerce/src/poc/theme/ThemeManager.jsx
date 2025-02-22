
import React, { useState } from "react";
import Article from "./Article.jsx"
import Footer from "./Footer.jsx"
// import Header from "./Header.jsx"

export const ThemeWrapper = React.createContext();




function ThemeManager() {

   
    const [currTheme, setCurrTheme] = useState("light");
    
    const toogleTheme = () => {
        const newTheme = currTheme.localeCompare("light") === 0 ? "dark" : "light";
        setCurrTheme(newTheme);
    }
    return (
        <>
            <ThemeManager.Provider value={ currTheme }>
                <h1>Theme Manager</h1>
                <button
                    onClick={toogleTheme}>
                    ToogleTheme
                </button>
               
                <Footer></Footer>
                <Article></Article>
            </ThemeManager.Provider>
        </>
    )
}

export default ThemeManager;