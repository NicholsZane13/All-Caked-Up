import React from "react";
import Header from "../../Header";
import Navbar from "../../Navbar";
import Contact from "../../Contact";
import Footer from "../../Footer";
import "../../../index.css";
import cakeArt from "../../../assets/serviceImages/cakeArt.jpg";
import cake from "../../../assets/serviceImages/cake.png";
import cookie from "../../../assets/serviceImages/cookie.png";
import cupcake from "../../../assets/serviceImages/cupcake.png";
import pastries from "../../../assets/serviceImages/pastries.png";

function ServicePage() {
  return (
    <body>
        <Header />
        <Navbar />
        <div className="grid-rows-6 bg-green flex items-center justify-center flex-col text-center pt-20 pb-10">
            <h1 className="font-Gloock text-tan text-4xl md:text-7xl mb-1 md:mb-3 font-bold pb-5">Services We Provide!</h1>
                <div className="">
                    <img className="" src={cakeArt} alt="edible image"></img>
                    <h3 className="">Wedding Cakes</h3>
                </div>
                <div className="">
                    <img className="" src={cake} alt="edible image"></img>
                    <h3 className="">Custom Cakes</h3>
                </div>
                <div className="">
                    <img className="" src={cookie} alt="edible image"></img>
                    <h3 className="">Custom Cookies</h3>
                </div>
                <div className="">
                    <img className="" src={cupcake} alt="edible image"></img>
                    <h3 className="">Custom Cupcakes</h3>
                </div>
                <div className="">
                    <img className="" src={pastries} alt="edible image"></img>
                    <h3 className="">Pasteries & More!</h3>
                </div>
        </div>
        <div className="">

        </div>
        <Contact />
        <Footer />
    </body>
  );
}

export default ServicePage;