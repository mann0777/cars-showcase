import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/Cars.png";

const Home = ()=>{
    return(
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                        Select your Car with <strong className="brand_name"> 
                        <br/> Car Showcase</strong>
                    </h1>
                    <h2 className="may-3">
                        We are here to make your Dream true
                    </h2>
                    <div className="mt-3">
                        <NavLink to ="/services" className="btn btn-outline-primary"> Get Started</NavLink>
                    </div>

                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={web} className="img-fluid animated" alt="home img" />

                    </div>
                    </div>
                    </div>
                </div>
            </div>

            </section>
        </>
    );

};

export default Home;