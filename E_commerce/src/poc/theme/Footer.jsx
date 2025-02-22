import { useContext } from "react"
import ThemeManager from "./ThemeManager"
import "./ThemeManager.css"
import { ThemeWrapper } from "./ThemeManager"



function Footer(){
    return(
        <div style={{border:"1px solid",padding:"1rem",margin:"1rem"}}>
            <div>Footer</div>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <div>---------------</div>
        </div>
    )
}

function Option(){
    const{currTheme}=useContext(ThemeManager);
    return <div className={currTheme}>Option</div>

    
}

export default Footer