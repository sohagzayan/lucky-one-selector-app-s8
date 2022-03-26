import React from "react";
import { Image } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import "./ShoppingCardItems.css";

const Shop = ({ item, handleCardDelete }) => {
  const { name,  picture, id } = item;

  return (
    <li className="shoppingCardItem">
      <Image className="add_product_image" src={picture} alt="image" />
      <h6>{name}</h6>
      <button onClick={() => handleCardDelete(id)} className="btn_delete">
        <AiFillDelete />
      </button>
    </li>
  );
};

export default Shop;
