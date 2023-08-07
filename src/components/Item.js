import React, {useState} from "react";

function Item({ name, category }) {

  const [addCart, SetAddCart] = useState(false)

  function handleClick(){
    SetAddCart(!addCart)
  }

  const nameSet = addCart ? "in-cart" : ""

  return (
    <li className= {nameSet}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;