// import React, { useState } from "react";

// function Portfolio() {
//   const [hovered, setHovered] = useState(null);
//   const [category, setCategory] = useState("all"); // default category

//   const pictures = [
//     {
//       id: 1,
//       src: "https://drive.google.com/drive/folders/1qlLjb2vE_xQ95S-D792z9WgRAOqSBMmZ",
//       text: "Wedding cakes",
//     },
//     {
//       id: 2,
//       src: "https://source.unsplash.com/random/2",
//       text: "Birthday cakes",
//     },
//     {
//       id: 3,
//       src: "https://source.unsplash.com/random/3",
//       text: "Themed cakes",
//     },
//     {
//       id: 4,
//       src: "https://source.unsplash.com/random/4",
//       text: "Custom cookies",
//     },
//     {
//       id: 5,
//       src: "https://source.unsplash.com/random/5",
//       text: "Classic cookies",
//     },
//     {
//       id: 6,
//       src: "https://source.unsplash.com/random/6",
//       text: "Specialty cookies",
//     },
//     { id: 7, src: "https://source.unsplash.com/random/7", text: "Flowers" },
//     {
//       id: 8,
//       src: "https://source.unsplash.com/random/8",
//       text: "Classic cupcakes",
//     },
//     {
//       id: 9,
//       src: "https://source.unsplash.com/random/9",
//       text: "Specialty cupcakes",
//     },
//   ];

//   const categories = Array.from(
//     new Set(pictures.map((picture) => picture.src))
//   ); // get unique image sources as categories

//   const filteredPictures =
//     category === "all"
//       ? pictures
//       : pictures.filter((picture) => picture.src === category);

//   const handleCategoryClick = (category) => {
//     setCategory(category);
//   };

//   return (
//     <div className='p-48'>
//     <div>
//       <div className="flex mb-4 pt-8">
//         <button className="mr-4" onClick={() => handleCategoryClick("all")}>
//           All
//         </button>
//         {categories.map((category) => (
//           <button
//             className="mr-4"
//             onClick={() => handleCategoryClick(category)}
//             key={category}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-3 gap-4">
//         {filteredPictures.map((picture) => (
//           <div
//             key={picture.id}
//             className="relative cursor-pointer"
//             onMouseEnter={() => setHovered(picture.id)}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <img
//               src={picture.src}
//               alt=""
//               className="w-64 h-64 object-cover pt-2"
//             />
//             {hovered === picture.id && (
//               <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-black text-white">
//                 <p className="text-lg font-bold">{picture.text}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Portfolio; 

import React, { useState } from "react";

function Portfolio() {
  const [hovered, setHovered] = useState(null);
  const [category, setCategory] = useState("all"); // default category

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

  const categories = Array.from(new Set(pictures.map(picture => picture.src))); // get unique image sources as categories

  const filteredPictures = category === "all" ? pictures : pictures.filter(picture => picture.src === category);

  const handleCategoryClick = (category) => {
    setCategory(category);
  }

  return (
    <div>
      <div className="flex mb-4">
        <button className="mr-4" onClick={() => handleCategoryClick("all")}>All</button>
        {categories.map((category) => (
          <button className="mr-4" onClick={() => handleCategoryClick(category)} key={category}>
            {category}
          </button>
        ))}
      </div>
<div className='p-8'>
      <div className="grid grid-cols-3 gap-4">
        {filteredPictures.map((picture) => (
          <div
            key={picture.id}
            className="relative cursor-pointer"
            onMouseEnter={() => setHovered(picture.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={picture.src} alt="" className="w-full h-64 object-cover pt-4" />
            {hovered === picture.id && (
              <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-black text-white">
                <p className="text-lg font-bold">{picture.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Portfolio;