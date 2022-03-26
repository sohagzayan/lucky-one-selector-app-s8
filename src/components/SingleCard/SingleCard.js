import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './SingleCard.css';


const SingleCard = ({product}) => {
    const {id , name , picture , price} = product
    return (
        <Card className='card_wrapper'>
           <Image
            className='image-card'
            src={picture}
            alt= "image"
           />
        </Card>
    );
};

export default SingleCard;