import React, { useState } from 'react';

function Menu() {
  const [activeButton, setActiveButton] = useState('blank');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const pictures = {
    Coffee: [
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic'
    ],
    Donuts: [
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic'
    ],
    Pastries: [
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic'
    ],
    Cupcakes: [
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic'
    ],
    Cookies: [
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic'
    ],
    Cakes: [
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic',
      'Filler text/pic'
    ],
  };

  return (
    <div>
      <button
        className={activeButton === 'Coffee' ? 'active' : ''}
        onClick={() => handleButtonClick('Coffee')}
      >
        Coffee
      </button>
      <button
        className={activeButton === 'Donuts' ? 'active' : ''}
        onClick={() => handleButtonClick('Donuts')}
      >
        Donuts
      </button>
      <button
        className={activeButton === 'Pastries' ? 'active' : ''}
        onClick={() => handleButtonClick('Pastries')}
      >
        Pastries
      </button>
      <button
        className={activeButton === 'Cupcakes' ? 'active' : ''}
        onClick={() => handleButtonClick('Cupcakes')}
      >
        Cupcakes
      </button>
      <button
        className={activeButton === 'Cookies' ? 'active' : ''}
        onClick={() => handleButtonClick('Cookies')}
      >
        Cookies
      </button>
      <button
        className={activeButton === 'Cakes' ? 'active' : ''}
        onClick={() => handleButtonClick('Cakes')}
      >
        Cakes
      </button>

      
      <div className="picture-grid">
        {pictures[activeButton] &&
          pictures[activeButton].map((picture) => (
            <img src={picture} alt="Random" key={picture} />
          ))}
      </div>
    </div>
  );
}

export default Menu;