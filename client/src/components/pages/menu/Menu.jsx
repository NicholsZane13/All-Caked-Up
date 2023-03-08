import { useState } from "react";

function Menu() {
  const [activeButton, setActiveButton] = useState("blank");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const menuItems = {
    Drinks: [
      (Esspresso = [
        {
          name: "Americano",
          price_12oz: "$2.50",
          price_16oz: "$3.00",
          price_20oz: "$3.50",
        },
        {
          name: "Latte",
          price_12oz: "$3.50",
          price_16oz: "$4.25",
          price_20oz: "$4.75",
        },
        {
          name: "Carmel Machiato",
          price_12oz: "$4.25",
          price_16oz: "$4.75",
          price_20oz: "$5.25",
        },
        {
          name: "Mocha",
          price_12oz: "$3.75",
          price_16oz: "$4.25",
          price_20oz: "$4.75",
        },
        {
          name: "Espresso",
          price: "$2.00",
        },
      ]),
      (Coffee = [
        {
          name: "Onyx",
          price_12oz: "$1.75",
          price_16oz: "$2.25",
          price_20oz: "$2.75",
        },
        {
          name: "Onyx-Bottomless Cup",
          price: "$3.50",
        },
        {
          name: "Pour Over",
          price_12oz: "$4.00",
          price_16oz: "$4.50",
        },
      ]),
      (NonCoffee = [
        {
          name: "Chai Latte",
          price_12oz: "$3.25",
          price_16oz: "$3.75",
          price_20oz: "$4.25",
        },
        {
          name: "Chai Tea",
          price_12oz: "$3.00",
          price_16oz: "$3.25",
          price_20oz: "$3.50",
        },
        {
          name: "London Fog",
          price_12oz: "$3.25",
          price_16oz: "$3.50",
          price_20oz: "$3.75",
        },
        {
          name: "Frappes",
          price_12oz: "$3.75",
          price_16oz: "$4.25",
          price_20oz: "$4.75",
        },
        {
          name: "Crush Fruit Smoothies",
          price_12oz: "$4.00",
          price_16oz: "$4.50",
          price_20oz: "$5.00",
        },
        {
          name: "Iced Tea",
          price_12oz: "$1.75",
          price_16oz: "$2.25",
          price_20oz: "$2.75",
        },
        {
          name: "Loose Leaf",
          price_12oz: "$2.50",
          price_16oz: "$2.50",
          price_20oz: "$2.50",
        },
      ]),
      (Extras = [
        {
          name: "House Made Syrups",
          price: "$0.45",
        },
        {
          name: "Syrups",
          price: "$0.25",
        },
        {
          name: "Milks",
          price: "$0.75",
        },
        {
          name: "Extra Shot",
          price: "$0.75",
        },
        {
          name: "Canned Soda",
          price: "$1.25",
        },
      ]),
    ],

    Donuts: [
      {
        name: "Long Johns",
        description:
          "Chocolate, Maple, White Icing. Filling: No Filling, Bararian, or Fluffly Icing",
        price: "$1.75",
      },
      {
        name: "Bismarks",
        description: "White, Powder, or Glaze. Filling: Only Raspberry!",
        price: "$1.75",
      },
      {
        name: "Boston Cream Donuts",
        description: "Chocolate Icing with Bararian Filling",
        price: "1.75",
      },
      {
        name: "Yeast Donuts",
        description:
          "Glaze, White, Maple, Chocolate, Cinammon Sugar, or Powdered Sugar",
        price: "$1.25",
      },
      {
        name: "Donut Holes",
        description: "Glazed Only",
        price: "$2.50 per dozen",
      },
      {
        name: "Cake Donuts",
        description: "Chocolate, Funfetti, Old Fashioned,",
        price: "$1.25",
      },
      {
        name: "Apple Fritters",
        price: "$1.75",
      },
      {
        name: "Peanut Butter Pretzel",
        price: "$1.75",
      },
      {
        name: "Twists",
        description: "Maple, Chocolate, or Glaze",
        price: "$1.75",
      },
    ],
    Pastries: [
      {
        name: "Chocolate Chip Muffins",
        price: "$3.00",
      },
      {
        name: "Blueberry Muffins",
        price: "$3.00",
      },
      {
        name: "Brownies",
        price: "$3.50",
      },
      {
        name: "Cinnamon Rolls ",
        price: "$4.00",
      },
      {
        name: "Coffee Cake Slice",
        price: "$2.50",
      },
    ],
    Cupcakes: [
      {
        name: "Chocolate",
        price: "$2.50",
      },
      {
        name: "Peanut Butter",
        price: "$2.50",
      },
      {
        name: "Red Velvet",
        description: "With Cream Cheese",
        price: "$2.50",
      },
      {
        name: "Birthday Cake ",
        description: "Funfetti with Rainbow Buttercream",
        price: "$2.50",
      },
      {
        name: "Cookies and Cream",
        description: "With Oreo Frosting",
        price: "$2.50",
      },
    ],
    Cookies: [
      (Gourmet = [
        {
          name: "Churro",
          price: "$2.50",
        },
        {
          name: "Monster",
          price: "$2.50",
        },
        {
          name: "Twix",
          price: "$2.50",
        },
        {
          name: "Turtle",
          price: "$2.50",
        },
        {
          name: "Triple Chocolate",
          price: "$2.50",
        },
        {
          name: "White Chocolate Macadamia Nut",
          price: "$2.50",
        },
        {
          name: "Coookies and Cream",
          price: "$2.50",
        },
        {
          name: "Make it a Sandwhich!",
          price: "$6.00",
        },
      ]),
      (Classic = [
        {
          name: "Chocolate Chip",
          price: "$1.50",
        },
        {
          name: "Red Velvet",
          price: "$1.50",
        },
        {
          name: "Chocolate Chunk",
          price: "$1.50",
        },
        {
          name: "Oatmeal",
          price: "$1.50",
        },
        {
          name: "Oatmeal Raisin",
          price: "$1.50",
        },
        {
          name: "Snickerdoodle",
          price: "$1.50",
        },
        {
          name: "M&M",
          price: "$1.50",
        },
        {
          name: "Peanut Butter",
          price: "$1.50",
        },
        {
          name: "Sugar",
          price: "$1.50",
        },
        {
          name: "Make it a Sandwich!",
          price: "$4.00",
        },
      ]),
    ],
    Cakes: [
      (SheetCakes = [
        (QuarterSheet = [
          {
            name: "Single Layer",
            price: "$40.00",
          },
          {
            name: "Double Layer",
            price: "$80.00",
          },
        ]),
        (HalfSheet = [
          {
            name: "Single Layer",
            price: "$55.00",
          },
          {
            name: "Double Layer",
            price: "$110.00",
          },
        ]),
        (FullSheet = [
          {
            name: "Single Layer",
            price: "$85.00",
          },
        ]),
      ]),
      (RoundCakes = [
        (SixInchRound = [
          {
            name: "Single Layer",
            description : "Serves 4-8",
            price: "$25.00",
          },
          {
            name: "Double Layer",
            description : "Serves 8-12",
            price: "$35.00",
          },
          {
            name: "Triple Layer",
            description : "Serves 12-16",
            price: "$45.00",
          },
        ]),
        (EightInchRound = [
          {
            name: "Single Layer",
            description : "Serves 8-12",
            price: "$35.00",
          },
          {
            name: "Double Layer",
            description : "Serves 16-20",
            price: "$45.00",
          },
          {
            name: "Triple Layer",
            description : "Serves 20-24",
            price: "$60.00",
          },
        ]),
        (TenInchRound = [
          {
            name: "Single Layer",
            description : "Serves 12-16",
            price: "$40.00",
          },
          {
            name: "Double Layer",
            description : "Serves 30-38",
            price: "$60.00",
          },
        ]),
      ]),
    ],
  };

  return (
    <div className="py-40 bg-greenL flex flex-wrap justify-center items-center">
      <div className="flex flex-wrap">
        {Object.keys(menuItems).map((itemName) => (
          <button
            className={`mx-4 mb-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded ${
              activeButton === itemName ? "active" : ""
            }`}
            onClick={() => handleButtonClick(itemName)}
            key={itemName}
          >
            {itemName}
          </button>
        ))}
      </div>

      {activeButton !== "blank" && (
        <div className="menu-container">
          <h2 className="text-center text-3xl mb-6">{activeButton} Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems[activeButton].map((menuItem) => (
              <div
                className="bg-white rounded-lg shadow-lg p-6"
                key={menuItem.name}
              >
                <h3 className="text-lg font-bold mb-2">filler</h3>
                <p className="text-gray-600 mb-4">filler</p>
                <p className="text-green-darker font-bold text-lg">filler</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
