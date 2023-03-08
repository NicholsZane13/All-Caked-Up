import React from "react";
import PicturePortfolio from "../../UI/Picture/PicturePortfolio";
import Contact from "../../Contact";
import Footer from "../../Footer";
import "../../../index.css";
import MainPic from "../../../assets/homePortfolio/mainHeader.jpg";

function HomePage() {
  return (
    <>
      <div className="bg-green sm:grid-cols-1 flex pl-10 pt-20 pb-10">
        <div className="content-left">
          <h1 className="font-Gloock text-left text-tan text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
            Origin Story : All Caked Up
          </h1>
        </div>
        <div className="">
          <img
            className="border rounded-full h-auto max-w-lg mx-auto"
            src={MainPic}
            alt="cute pic"
          />
        </div>
        <div>
          <p className="font-Indie text-tan text-lg max-w-xl m-6 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          </p>
        </div>
      </div>

      <div className="bg-white flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-greenL text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
          <a
            className="italic animate-pulse"
            href="https://www.facebook.com/profile.php?id=100071444614424"
          >
            Check Us Out!
          </a>
        </h1>
        <PicturePortfolio />
      </div>
    </>
  );
}

export default HomePage;
