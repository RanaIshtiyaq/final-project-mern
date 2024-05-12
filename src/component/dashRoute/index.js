import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarMenu from "../../nav";
import Home from "../home";
import About from "../about";

export default function DashRoute(){
return(
    <div>
        <BrowserRouter>
        <Routes>
            {/* <Route exact path="/" Component={SidebarMenu}></Route>
            <Route exact path="/home" Component={Home}></Route>
            <Route exact path="/about" Component={About}></Route> */}
          
        </Routes>
        </BrowserRouter>
    </div>
)


}