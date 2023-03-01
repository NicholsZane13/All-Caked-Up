import React from "react";

function Product(props) {
  const { name, image, price, description } = props;

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;