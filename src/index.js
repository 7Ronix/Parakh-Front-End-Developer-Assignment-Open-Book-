import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const jsonData = {
  data: [
    {
      name: "Cosmetics",
      productList: [
        {
          name: "Hair Oil",
          price: 122,
        },
        {
          name: "Face wash",
          price: 123,
        },
      ],
    },
    {
      name: "Household",
      productList: [
        {
          name: "Hair Oil",
          price: 122,
        },
        {
          name: "Face wash",
          price: 123,
        },
      ],
    },
  ],
};

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Product Added to the cart.");
    console.log("List of products present in cart array:", cart);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    setCart(updatedCart);
    console.log("Product removed from the cart.");
    console.log("List of products present in cart array:", updatedCart);
  };

  const renderProducts = () => {
    return jsonData.data.map((category) => (
      <div key={category.name}>
        <h2>{category.name}</h2>
        <hr />
        <div className="product-container">
          {category.productList.map((product) => (
            <div key={product.name} className="product-box">
              <p>Name: {`${product.name}`}</p>
              <p>Price: {product.price}</p>
              <br />
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => removeFromCart(product)}>
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return <div className="App">{renderProducts()}</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));
