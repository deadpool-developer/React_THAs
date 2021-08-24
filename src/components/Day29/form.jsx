import React from "react";
import {useDispatch , useSelector} from "react-redux";
import { UpdatePlace , UpdatePlaceData } from "./Action/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./weather.css";


const Day29_Form=()=>
{
    const place = useSelector( (state) => state.place);
    const theme = useSelector ((state)=> state.theme);
    const dispatch = useDispatch();
    return(
        <>
         <div className="day29_weather">
             <input className={theme ? "day29_inputdark" : "day29_input"}
             type="text"
              placeholder="Enter city name" 
              value={place} 
              onChange={(e)=>
              {
                  dispatch(UpdatePlace(e.target.value));

              }}/>

           <button type="button" className={theme ? "btn btn-primary day29_btn" : "btn btn-dark day29_btn"} 
           onClick={()=>
           {
               dispatch(UpdatePlaceData(place));
               
           }}>Submit</button>

         </div>
        </>
    );
}
export default Day29_Form;