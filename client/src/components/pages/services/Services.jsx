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
        <div className="bg-green justify-center text-center pt-20 pb-10">
            <h1 className="font-Gloock text-tan text-4xl md:text-7xl mb-1 md:mb-3 font-bold pb-5">Services We Provide!</h1>
            <div className="grid grid-rows-1 grid-flow-col gap-4">
                <div class="row-start1 row-end-3 max-w-fit p-2 bg-green border border-gray-200 rounded-lg shadow">
                <img class="items-center object-contain h-48 w-60 rounded-t-lg" src={cakeArt} alt="edible image" />
                    <div class="p-1">
                        <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-tan">Wedding Cakes</h5>
                    </div>
                </div>
                <div class="row-start1 row-end-3 max-w-fit p-2 bg-green border border-gray-200 rounded-lg shadow">
                <img class="items-center object-contain h-48 w-60 rounded-t-lg" src={cake} alt="edible image" />
                    <div class="p-1">
                        <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-tan ">Custom Cakes</h5>
                    </div>
                </div>
                <div class="row-start1 row-end-3 max-w-fit p-2 bg-green border border-gray-200 rounded-lg shadow">
                <img class="items-center object-contain h-48 w-60 rounded-t-lg" src={cookie} alt="edible image" />
                    <div class="p-1">
                        <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-tan ">Custom Cookies</h5>
                    </div>
                </div>
                <div class="row-start1 row-end-3 max-w-fit p-2 bg-green border border-gray-200 rounded-lg shadow">
                <img class="items-center object-contain h-48 w-60 rounded-t-lg" src={cupcake} alt="edible image" />
                <div class="p-1">
                    <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-tan ">Custom Cupcakes</h5>
                </div>
                </div>
                <div class="row-start1 row-end-3 max-w-fit p-2 bg-green border border-gray-200 rounded-lg shadow">
                <img class="items-center object-contain h-48 w-60 rounded-t-lg" src={pastries} alt="edible image" />
                    <div class="p-1">
                        <h5 class="mb-2 text-2xl font-bold text-center tracking-tight text-tan ">Pastries & More!</h5>
                    </div>
                </div>
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