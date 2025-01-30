import React from "react";
import { Link } from "react-router-dom";

function Items() {
  return (
    <div>
      <h1>Items Page</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Items;
