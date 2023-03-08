import React, { useState } from "react";
import ImageDisplay from "../../modals/imageDisplay.jsx";

function Portfolio() {
  const [hovered, setHovered] = useState(null);
  const [displayState, setDisplayState] = useState(false);

  const [imageCategory, setImageCategory] = useState("none");
  const pictures = [
    {
      id: 1,
      src: "https://drive.google.com/uc?export=view&id=1yECoa2txilPgkwdVEwpyB6pVXGw5L3GO",
      text: "Birthday cakes",
    },
    {
      id: 2,
      src: "https://drive.google.com/uc?export=view&id=1ot-Mb9fpwvEEIPgm8NtMNxSgUKF_Sx6s",
      text: "Themed cakes",
    },
    {
      id: 3,
      src: "https://drive.google.com/uc?export=view&id=1mg3EGEYsdfkzt_Tr9oYCt2uE1e5p7yX-",
      text: "Custom cookies",
    },
    {
      id: 4,
      src: "https://drive.google.com/uc?export=view&id=1w3WyyXLInPwQHkJNQ1RI35NmhrUgxxLD",
      text: "Custom cupcakes",
    },
  ];

  const displayModal = () => {
    if (displayState) {
      return (
        <ImageDisplay
          imageCategory={imageCategory}
          setDisplayState={setDisplayState}
        />
      );
    } else {
      return <></>;
    }
  };

  const handleImageDisplay = (e) => {
    setDisplayState(true);
    setImageCategory(e.target.dataset.category);
  };

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-1 pt-20 mx-2">
      {pictures.map((picture) => (
        <div
          key={picture.id}
          className="pt-10 w-full sm:w-1/2 md:w-1/3 px-2 py-2 relative cursor-pointer"
          onMouseEnter={() => setHovered(picture.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={(e) => handleImageDisplay(e)}
        >
          <img
            data-category={picture.text}
            src={picture.src}
            alt=""
            className="w-full h-auto"
          />
          {hovered === picture.id && (
            <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-black text-black">
              <p className="text-lg font-bold">{picture.text}</p>
            </div>
          )}
        </div>
      ))}
      {displayModal()}
    </div>
  );
}

export default Portfolio;
