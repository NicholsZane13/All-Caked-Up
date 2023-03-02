import React from "react";
import Header from "../../Header";
import Navbar from "../../Navbar";
import PicturePortfolio from "../../UI/PicturePortfolio";
import Contact from "../../Contact";
import Footer from "../../Footer";
import "../../../index.css";

function HomePage() {
  return (
    <body>
        <Header />
        <Navbar />
        <div className="bg-green-900">
            <h1 className="">Origin Story : All Caked Up</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,</p>
        </div>

        <div className="">
            <h1 className="">Look At Us!</h1>
            {/* <PicturePortfolio /> */}
        </div>
        {/* <Contact /> */}
        <Footer />
    </body>
  );
}

export default HomePage;