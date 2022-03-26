import React, { useEffect, useState } from "react";
import ErrorMaximumAdding from "../Error/ErrorMaximumAdding";
import SameProductMultipleAddError from "../Error/SameProductMultipleAddError";
import ProductCard from "../ProductCard/ProductCard";
import QustionAccordion from "../QustionAccordion/QustionAccordion";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import "./Home.css";

const Home = () => {
  // Control State
  const [addToCardProduct, setAddToCardProduct] = useState([]);
  const [maximumAddingError, setMaximumAddingError] = useState(false);
  const [DublicatAddError, setDublicatAddError] = useState(false);
  const [allData, setAllData] = useState([]);

  // Fetching Data 

  useEffect(() => {
    fetch("Data.js")
      .then((response) => response.json())
      .then((data) => {
          const RandomShoing = data.sort(()=> 0.5 - Math.random())
          setAllData(RandomShoing)
      });
  }, []);


  // function =============

  const handleAddToCard = (product) => {
    if (addToCardProduct.find((pro) => pro.id === product.id)) {
      setDublicatAddError(true);
    } else {
      if (addToCardProduct.length >= 4) {
        setMaximumAddingError(true);
      } else {
        setAddToCardProduct([...addToCardProduct, product]);
      }
    }
  };

  return (
    <>
    <div className="product_card_wrapper">
      <SameProductMultipleAddError
        DublicatAddError={DublicatAddError}
        setDublicatAddError={setDublicatAddError}
      />
      <ErrorMaximumAdding
        maximumAddingError={maximumAddingError}
        setMaximumAddingError={setMaximumAddingError}
      />
      <div className="product">
        {allData.map((product) => (
          <ProductCard
            handleAddToCard={handleAddToCard}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <div className="shoppingCardWrapper">
        <ShoppingCard
          addToCardProduct={addToCardProduct}
          setAddToCardProduct={setAddToCardProduct}
        />
      </div>
    </div>
          
          <QustionAccordion />
          
    </>
  );
};

export default Home;
