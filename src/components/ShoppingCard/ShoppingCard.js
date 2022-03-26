import React from 'react';
import ShoppingCardItems from '../ShoppingCardItems/ShoppingCardItems';
import './ShoppingCard.css';


const ShoppingCard = ({addToCardProduct ,setAddToCardProduct}) => {
    return (
        <div className='shoppingCard'>
              <h2>Selected Product</h2>
              <ul>
                  {
                      addToCardProduct.map((item)=> <ShoppingCardItems item={item} />  )
                  }  
              </ul>
              <div className="shoppingCardButton">
                  <button className='btnChooseForMe btnCard'>Choose 1 for me</button>
                  <button className='btnCard btnChooseAgain'>Choose again</button>
              </div>
        </div>
    );
};

export default ShoppingCard;