import React from 'react';
import ShoppingCardItems from '../ShoppingCardItems/ShoppingCardItems';
import './ShoppingCard.css';


const ShoppingCard = ({addToCardProduct ,setAddToCardProduct}) => {
    
    const handleCardDelete = (id)=>{
        setAddToCardProduct(addToCardProduct.filter((product)=> product.id !== id))
    }
    
    
    
    return (
        <div className='shoppingCard'>
              <h2>Selected Product</h2>
              <ul>
                  {
                      addToCardProduct.map((item)=> <ShoppingCardItems key={item.id} item={item} handleCardDelete={handleCardDelete} />  )
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