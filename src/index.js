import React from "react";
import ReactDom from "react-dom";
// import Menu from "./menu";
import {BrowserRouter} from "react-router-dom";
import App from "./menu";




ReactDom.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
    document.getElementById("root"),
   
)
