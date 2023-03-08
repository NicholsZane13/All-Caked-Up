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
  "Custom cookies": [
    "https://drive.google.com/uc?export=view&id=1YfuxeWczH0JY8ryLMjQMSkz92czD4rn1",
    "https://drive.google.com/uc?export=view&id=1WXWd9DFQudgERmZY_gJc-dbBHo706SbE",
    "https://drive.google.com/uc?export=view&id=1g1MZrthQ5kDf0saxHgu1gGx2GE0DQhl3",
    "https://drive.google.com/uc?export=view&id=1wdRbClCW4B6FgUMDl-Xo5FL58DREH_3Z",
    "https://drive.google.com/uc?export=view&id=18rC5u0lHNg-ngeZBwCqs0fquBktt6ll-",
  ],
  "Themed cakes": [
    "https://drive.google.com/uc?export=view&id=1YAAS5OLoCsf_kNhgB3DbtybEIAltIGmU",
    "https://drive.google.com/uc?export=view&id=1fo1QvVm54HMKQPUPdn0NeUVZK3xyCF96",
    "https://drive.google.com/uc?export=view&id=1FWSH--IRvIZUKeaBc5lP0sVDLc7PTB7U",
    "https://drive.google.com/uc?export=view&id=1XLiR9tVi2Ey0vwFbbm5armPYI-Zyka9W",
    "https://drive.google.com/uc?export=view&id=1R7XqHhvQZ1a6Z3pclQRT-4dHcgGfzq_7",
    "https://drive.google.com/uc?export=view&id=1TxoacuwW_SBSQos817k27O6yPn1NEick",
    "https://drive.google.com/uc?export=view&id=1ycsu-RCN974Vy3Xb_fBjmJ9yMSdrmrCb",
    "https://drive.google.com/uc?export=view&id=1ycsu-RCN974Vy3Xb_fBjmJ9yMSdrmrCb",
    "https://drive.google.com/uc?export=view&id=1-MYF-vyxEPEQkw6m23_c3JBatkf7NZyN",
  ],
  "Custom cupcakes": [
    "https://drive.google.com/uc?export=view&id=1M9n-pNgb7i1MVeflt0vTYr66jeXAYjt7",
    "https://drive.google.com/uc?export=view&id=1NHu_6GQ3hztt9QIcNvknpE-skrPoUBqL",
    "https://drive.google.com/uc?export=view&id=1Ey6OiSzRf3vHMzJUzgVyVeGZypB4SasB",
    "https://drive.google.com/uc?export=view&id=1JeTmljiRCpeLUUZslqlFuldhl4ibu9pk",
    "https://drive.google.com/uc?export=view&id=1joD3MblCxaOv8cbjAuKqQq_iubaaAXky",
    "https://drive.google.com/uc?export=view&id=1uNX2oHkoEoDVAnH4gB1UT5-4TT2A6zlk",
    "https://drive.google.com/uc?export=view&id=1CHhOP_Jwri5P5KD0J4jCOi9qgIMG8GYZ",
  ],
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
        <div className="w-full rounded">
          <img className="" src={img}></img>
        </div>
      ))}
      <button className="modal-exit-btn" onClick={exitModal}>
        <RxExit size={"1.5rem"} />
      </button>
    </div>,

    modalRoute
  );
}

export default ImageDisplay;
