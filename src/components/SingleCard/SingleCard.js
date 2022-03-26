import React from 'react';
import { Image } from 'react-bootstrap';
import './SingleCard.css';


const SingleCard = ({product ,handleAddToCard}) => {
    const {id , name , picture , price} = product
    return (
        <div className='card_wrapper'>
           <Image
            className='image-card'
            src={picture}
            alt= "image"
           />
           <div className="card_details">
               <h3>{name}</h3>
               <h5>Price : <strong>{price}</strong> </h5>
               <button onClick={()=> handleAddToCard(product)} className='btn-add-card'>ADD TO CARD</button>
           </div>
           
        </div>
    );
};

export default SingleCard;