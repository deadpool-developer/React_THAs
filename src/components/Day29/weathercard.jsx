import React from "react";
import {useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./weather.css";


const Day29_WheatherCard=()=>
{
    const placeData = useSelector((state)=>state.placeData);
    const theme = useSelector((state)=>state.theme);
    return(
        <>
        <div className={theme ? "day29_contentdark" : "day29_content"}>

{placeData.location ? 
(
    <div>

    <div className="day29_country">
    <h1 className="day29_h1">{placeData.location.name}</h1>
   
    <h1 className="day29_h3">{placeData.location.country}</h1>

    </div>

    <img src={placeData.current.condition.icon} alt="" className="day29_img"/>

    <div className="day29_text">
    
    <h1 className="day29_h4">{placeData.current.temp_c}<span style={{marginLeft:"5px"}}>°</span></h1>
    
   
     
    <h1 className="day29_h6">{placeData.current.condition.text}</h1>

    </div>

    
    <hr/>
    <div>
   
    
    <img className="day29_img2" alt="" src={placeData.forecast.forecastday[0].hour[0].condition.icon}/>
    
   

    
    <img className="day29_img2" alt="" src={placeData.forecast.forecastday[0].hour[1].condition.icon}/>
    
   


    
    <img className="day29_img2" alt="" src={placeData.forecast.forecastday[0].hour[2].condition.icon}/>
    
    

   
    <img className="day29_img2" alt="" src={placeData.forecast.forecastday[0].hour[3].condition.icon}/>
    
   

    
    <img className="day29_img2" alt="" src={placeData.forecast.forecastday[0].hour[4].condition.icon}/>
    
    
   
   </div>

   <br/>

   <div style={{width:"550px" , backgroundColor:"transparent"}}>
    <span className="day29_temp1">{placeData.forecast.forecastday[0].hour[0].temp_c} °C</span>
    <span className="day29_temp2">{placeData.forecast.forecastday[0].hour[1].temp_c} °C</span>
    <span className="day29_temp3">{placeData.forecast.forecastday[0].hour[2].temp_c} °C</span>
    <span className="day29_temp4">{placeData.forecast.forecastday[0].hour[3].temp_c} °C</span>
    <span className="day29_temp5">{placeData.forecast.forecastday[0].hour[4].temp_c} °C</span>
    
    </div>
   
   <br/><br/>
    <hr style={{marginTop:"-40px"}}/>

    <div className="day29_hour">
   <div className={theme ? "day29_wind_dark" : "day29_wind"}> 
   <img className= "day29_wph_img" alt="" src="https://www.clipartmax.com/png/middle/59-593346_wind-clipart-weather-symbol-windy-weather-icon.png"/>
   <br/>
   <span>Wind <br/><span>{placeData.current.wind_kph} km/h</span></span> </div>

   <div className={theme ? "day29_humidity_dark" : "day29_humidity"}> 
   <img className="day29_wph_img" alt="" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/humidity-drops-rain-water-weather-forecast-61169.png"/>
   <br/>
   <span>Humidity <br/><span>{placeData.current.humidity} %</span></span> </div>

   <div className={theme ? "day29_prec_dark" : "day29_prec"}> 
   <img  className="day29_wph_img" alt="" src="https://image.flaticon.com/icons/png/128/137/137220.png"/>
   <br/>
   <span>Precipitation <br/><span>{placeData.current.precip_in} %</span></span></div>

    </div>

    
    
    
   
   
    </div>

   


)
 : (<div className="day29_h2">Oops!! <br/>Place Not Found <br/> TRY AGAIN</div>)}

 </div>

        </>
    );
}
export default Day29_WheatherCard;