import React from "react";
import ShoppingCardItems from "../ShoppingCardItems/ShoppingCardItems";
import "./ShoppingCard.css";

const ShoppingCard = ({ addToCardProduct, setAddToCardProduct }) => {
  const handleCardDelete = (id) => {
    setAddToCardProduct(
      addToCardProduct.filter((product) => product.id !== id)
    );
  };

  const handleRandomProduct = () => {
    const random = addToCardProduct;
    if(random.length > 0){
        const SelectRandomOneValue = Math.floor(Math.random() * random.length);
        setAddToCardProduct([random[SelectRandomOneValue]]);
    }
    
  };

  return (
    <div className="shoppingCard">
      <h2>Selected Product</h2>
      <ul>
        {addToCardProduct.map((item) => (
          <ShoppingCardItems
            key={item.id}
            item={item}
            handleCardDelete={handleCardDelete}
          />
        ))}
      </ul>
      <div className="shoppingCardButton">
        <button
          onClick={handleRandomProduct}
          className="btnChooseForMe btnCard"
        >
          Choose 1 for me
        </button>
        <button
          onClick={() => setAddToCardProduct([])}
          className="btnCard btnChooseAgain"
        >
          Choose again
        </button>
      </div>
    </div>
  );
};

export default ShoppingCard;
