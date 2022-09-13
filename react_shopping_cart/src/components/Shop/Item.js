import { useState } from "react";
import { Link } from "react-router-dom";
import Catalog from "./catalog.json";

import img from "../images/Nike_hoodie1.jpg";

function Item({ itemID, addItemToCart }) {
  const item = Catalog.find((item) => item.id === itemID);
  // const [showCheckoutBtn, setShowCheckoutBtn] = useState(false);

  function addToCart() {
    addItemToCart({ ...item, quantity: 1 });
    // setShowCheckoutBtn(true);
  }

  const images = require.context("../images", true);
  let img = images("./" + item.imgs);

  return (
    <div>
      <img src={img} alt="" />
      {/* <div>{item.name}</div> */}

      <div> {item.name}</div>
      <div>${item.price}</div>
      <div>
        <button
          onClick={addToCart}
        >
          {" "}
          Add to Cart
        </button>
      </div>
      <Link to="/Shop">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default Item;
