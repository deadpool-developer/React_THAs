import React from "react";
import "./card2.css"

var a = [1,2,3,4,5,6,7,8]
var b = ["bl" , "wh" , "bl", "wh" ,"bl", "wh" , "bl", "wh"]
function Card2() {
    return (
        <div className="card-border">
                <table>
                    {
                        a.map(item =>
                            <tr>
                            {
                                b.map(item =>
                                    item==="bl"?
                                    <td className="white"></td>:
                                    <td className="black"></td>
                                    )
                            }
                        </tr>
                            )
                   
}
                </table>
        </div>
    )
}



export default Card2;