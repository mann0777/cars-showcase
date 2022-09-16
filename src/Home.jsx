import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/Cars.png";
import Common from "./Common";

const Home = ()=>{
    return(
        <>
            <Common
            name="Welcome to Home Page"
            imgsrc={web}
            visit="/service"
            btname="Get Started" />
        </>
    );

};

export default Home;