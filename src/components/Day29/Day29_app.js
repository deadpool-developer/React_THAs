import React from "react";
import { useSelector } from "react-redux";
import Day29_Form from "./form";
import Day29_WheatherCard from "./weathercard";
import Theme from "./Day29_theme";


const Day29App=()=>
{
    const theme = useSelector((state)=> state.theme);
    return(
        <>
        
        <div className={theme ? "App_dark" : "App_light"}>
        <Theme/>
        <Day29_Form/>
        <Day29_WheatherCard/>
        </div>
        
        </>
    );
}
export default Day29App;