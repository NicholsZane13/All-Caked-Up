import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { RxExit } from "react-icons/rx";

const allImages = {
  "Birthday cakes": [
    "https://drive.google.com/uc?export=view&id=1yECoa2txilPgkwdVEwpyB6pVXGw5L3GO",
    "https://drive.google.com/uc?export=view&id=1YNgAl3bFOF9YITo64qBELo37tUu44MQu",
    "https://drive.google.com/uc?export=view&id=1ZzF731AiNoJR0Yja7Qdf8TMeXsZJzxkq",
    "https://drive.google.com/uc?export=view&id=14y11WU0G0lL7wFzZmegNqgAXOA4KDVcl",
    "https://drive.google.com/uc?export=view&id=1J_AnVTfoZ16aU9plx6scQD7fRcxSF0kD",
    "https://drive.google.com/uc?export=view&id=1IyRL9E_QIa12hhJtRnb-YQPssdezu3oB",
    "https://drive.google.com/uc?export=view&id=1QzhA8U8CfuVyfUGfX0XPw6-PQewxR-_M",
    "https://drive.google.com/uc?export=view&id=16UMC11GDzZ3MMfgoqIA7rKlI3fpWLno_",
    "https://drive.google.com/uc?export=view&id=10GcRa7BsmjU4UjrSAJqTwjF_1YjzY1jY",
  ],
  "Custom cookies": [],
  "Themed cakes": [],
  "Custom cupcakes": [],
  "": [],
};

function ImageDisplay({ setDisplayState, imageCategory }) {
  const modalRoute = document.getElementById("modal");
  const [imageState, setImageState] = useState([]);

  const exitModal = () => {
    setDisplayState(false);
  };

  useEffect(() => {
    setImageState(allImages[imageCategory]);
  }, [imageCategory]);

  return createPortal(
    <div className="imageDisplay">
      {imageState.map((img) => (
        <img className="w-full h-64" src={img}></img>
      ))}
      <button className="modal-exit-btn" onClick={exitModal}>
        <RxExit size={"1.5rem"} />
      </button>
    </div>,

    modalRoute
  );
}

export default ImageDisplay;
