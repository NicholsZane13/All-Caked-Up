import React from "react";
import Contact from "../../Contact";
import Footer from "../../Footer";
import "../../../index.css";
import cakeArt from "../../../assets/serviceImages/cakeArt.jpg";
import cake from "../../../assets/serviceImages/cake.png";
import cookie from "../../../assets/serviceImages/cookie.png";
import cupcake from "../../../assets/serviceImages/cupcake.png";
import pastries from "../../../assets/serviceImages/pastries.png";

const cakeIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline w-10 h-10"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" /></svg>


function ServicePage() {
  return (
    <>
        <div className="bg-green justify-center text-center pt-20 pb-10">
            <h1 className="font-Gloock text-tan text-4xl md:text-7xl mb-1 md:mb-3 font-bold pb-5">Services We Provide!</h1>
            <div className="grid grid-rows-1 grid-flow-col gap-4">
                <div className="row-start1 row-end-3 max-w-fit p-2 bg-green border-2 rounded-lg shadow">
                <img className="items-center object-contain h-48 w-60 rounded-t-lg" src={cakeArt} alt="edible" />
                    <div className="p-1">
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-tan">Wedding Cakes</h5>
                    </div>
                </div>
                <div className="row-start1 row-end-3 max-w-fit p-2 bg-green border-2 rounded-lg shadow">
                <img className="items-center object-contain h-48 w-60 rounded-t-lg" src={cake} alt="edible" />
                    <div className="p-1">
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-tan ">Custom Cakes</h5>
                    </div>
                </div>
                <div className="row-start1 row-end-3 max-w-fit p-2 bg-green border-2 rounded-lg shadow">
                <img className="items-center object-contain h-48 w-60 rounded-t-lg" src={cookie} alt="edible" />
                    <div className="p-1">
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-tan ">Custom Cookies</h5>
                    </div>
                </div>
                <div className="row-start1 row-end-3 max-w-fit p-2 bg-green border-2 rounded-lg shadow">
                <img className="items-center object-contain h-48 w-60 rounded-t-lg" src={cupcake} alt="edible" />
                <div className="p-1">
                    <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-tan ">Custom Cupcakes</h5>
                </div>
                </div>
                <div className="row-start1 row-end-3 max-w-fit p-2 bg-green border-2 rounded-lg shadow">
                <img className="items-center object-contain h-48 w-60 rounded-t-lg" src={pastries} alt="edible" />
                    <div className="p-1">
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-tan ">Pastries & More!</h5>
                    </div>
                </div>
        </div>
</div>
<div className="bg-white flex justify-center pt-10 pb-10">
    <h1 className="font-Gloock text-black text-4xl md:text-7xl mb-1 md:mb-3 font-bold pb-5">HOW TO ORDER CUSTOM BAKED GOODS</h1>
</div>
<div className="justify-center flex">
    <ul className="mb-8 space-y-4">
        <li className="space-x-3">
            {cakeIcon}
            <span  className="text-2xl font-bold text-center text-black">Browse through our site and gather some inspiration!</span>
        </li>
        <li className="space-x-3">    
            {cakeIcon}
            <span className="text-2xl font-bold text-center text-black">Determine the details about your order. How many are you feeding?</span>
        </li>
        <li className="space-x-3">
            {cakeIcon}
            <span className="text-2xl font-bold text-center text-black">Give us a call to handle any questions or concerns you may have. 620-555-8888</span>
        </li>
        <li className="space-x-3">
            {cakeIcon}
            <span className="text-2xl font-bold text-center text-black">Receive delicious goodies to enjoy!</span>
        </li>
    </ul>
</div>
        <Contact />
        <Footer />
    </>
  );
}

export default ServicePage;