import React, { useState } from "react";

function Portfolio() {
  const [hovered, setHovered] = useState(null);

  const pictures = [
    { id: 1, src: "https://source.unsplash.com/random/1", text: "Wedding cakes" },
    { id: 2, src: "https://source.unsplash.com/random/2", text: "Birthday cakes" },
    { id: 3, src: "https://source.unsplash.com/random/3", text: "Themed cakes" },
    { id: 4, src: "https://source.unsplash.com/random/4", text: "Custom cookies" },
    { id: 5, src: "https://source.unsplash.com/random/5", text: "Classic cookies" },
    { id: 6, src: "https://source.unsplash.com/random/6", text: "Specialty cookies" },
    { id: 7, src: "https://source.unsplash.com/random/7", text: "Flowers" },
    { id: 8, src: "https://source.unsplash.com/random/8", text: "Classic cupcakes" },
    { id: 9, src: "https://source.unsplash.com/random/9", text: "Specialty cupcakes" }
  ];

  return (
    <div className="flex flex-wrap -mx-2">
      {pictures.map((picture) => (
        <div
          key={picture.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-2 relative cursor-pointer"
          onMouseEnter={() => setHovered(picture.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <img src={picture.src} alt="" className="w-full h-auto" />
          {hovered === picture.id && (
            <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-black text-white">
              <p className="text-lg font-bold">{picture.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Portfolio;