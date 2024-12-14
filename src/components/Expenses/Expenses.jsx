import React from "react";

function Expenses() {
  let username = "John Doe";
  let product = {
    name: "iPhone",
    qty: 0,
    price: 1999,
  };

  let friends = ["Monica", "Ross", "Chandler", "Joey"];

  return (
    <>
      <div>
        <h2 className="heading">Expenses coming soon...</h2>
      </div>
      <div>
        <p>Sum : {3 + 7}</p>
        <p>Username : {username}</p>
        <p>Product Name : {product.name}</p>
        <p>Quantity : {product.qty}</p>
        {product.qty > 0 && <p>Price: {product.price}</p>}
        {/* <p>Product : {product}</p> -- ERROR */}

        <ul>
          {friends.map((friend) => (
            <li>{friend}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Expenses;

// React.createElement("div", {}, "")
