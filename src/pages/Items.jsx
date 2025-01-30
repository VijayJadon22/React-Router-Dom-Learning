import React from "react";
import { Link } from "react-router-dom";
import items from "../itemData";

function Items() {
  return (
    <>
      <div>
        <h1>Items Page</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div>
        {items.map((item) => (
          <Link key={item.id} to={`/items/${item.id}`}>
            <h3>{item.id}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Items;
