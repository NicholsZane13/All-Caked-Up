import React from "react";
import PicturePortfolio from "../../UI/Picture/PicturePortfolio";
import Contact from "../../Contact";
import Footer from "../../Footer";
import "../../../index.css";
import MainPic from "../../../assets/homePortfolio/mainHeader.jpg";

function HomePage() {
  return (
    <>
      <div className="bg-green sm:grid-cols-1 flex pl-10 pt-20 pb-10 pt-40">
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
            Our mission at All Caked Up is to create a memorable and enjoyable
            experience for every customer by providing the finest quality
            coffee, custom cakes, and fresh pastries daily. Our commitment to
            exceeding customer expectations is at the core of everything we do,
            and we strive to create a warm and welcoming atmosphere where our
            customers can indulge in the decadent flavors of our treats. Our
            founder's journey as a retail cake decorator has evolved into a
            passion for baking and sharing gourmet pastries with the community.
            At All Caked Up, we take pride in using only the freshest
            ingredients and baking everything from scratch to ensure that every
            bite is a delightful experience. Join us on this sweet journey, and
            let us satisfy your cravings with our exceptional products and
            exceptional service.
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
