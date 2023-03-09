import React, { useState } from "react";
import Product from "./menu-components/Product";
import {products} from "./products";

function Menu() {
  const [activeButton, setActiveButton] = useState("Cake");
  console.log(useState);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className=" bg-greenL ">
      <div id="buttons" className="flex  items-center justify-center pt-40">
        <button
          className={`mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded ${
            activeButton === "Coffee" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("Drink")}
        >
          Coffee
        </button>
        <button
          className={`mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded ${
            activeButton === "Donuts" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("Donut")}
        >
          Donuts
        </button>
        <button
          className={`mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded ${
            activeButton === "Pastries" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("Pastry")}
        >
          Pastries
        </button>
        <button
          className={`mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded ${
            activeButton === "Cupcakes" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("Cupcake")}
        >
          Cupcakes
        </button>
        <button
          className={`mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded ${
            activeButton === "Cookies" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("Cookie")}
        >
          Cookies
        </button>
        <button
          className={`mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded ${
            activeButton === "Cakes" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("Cake")}
        >
          Cakes
        </button>
      </div>

      <div
        id="cards"
        className="p-24 grid grid-cols-5 gap-8 mt-8 justify-items-center justify-center"
      >
        {products.map(({name,description,price,category,subcategory,theme}) => {
          if (category === activeButton) {
            return (
              <Product
                key={name}
                name={name}
                description={description}
                price={price}
                category={category}
                subcategory={subcategory}
                theme={theme}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Menu;
