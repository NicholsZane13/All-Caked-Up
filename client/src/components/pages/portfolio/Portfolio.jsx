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
      src: "https://source.unsplash.com/random/2",
      text: "Themed cakes",
    },
    {
      id: 3,
      src: "https://source.unsplash.com/random/3",
      text: "Custom cookies",
    },
    {
      id: 4,
      src: "https://source.unsplash.com/random/4",
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
    <div className="flex flex-wrap -mx-2">
      {pictures.map((picture) => (
        <div
          key={picture.id}
          className="p-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-2 relative cursor-pointer"
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
            <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-black text-white">
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
