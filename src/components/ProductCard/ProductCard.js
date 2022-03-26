import React from 'react';
import { Image } from 'react-bootstrap';
import { AiOutlineShopping } from 'react-icons/ai';
import './ProductCard.css';


const ProductCard = ({product ,handleAddToCard}) => {
    const {name , picture , price} = product;


    
    return (
        <div className='card_wrapper'>
           <Image
            className='image-card'
            src={picture}
            alt= "image"
           />
           <div className="card_details">
               <h4>{name}</h4>
               <h5>Price : <strong>{price}</strong> </h5>
               <button onClick={()=> handleAddToCard(product)} className='btn-add-card'>ADD TO CARD <AiOutlineShopping /></button>
           </div>
           
        </div>
    );
};

export default ProductCard;