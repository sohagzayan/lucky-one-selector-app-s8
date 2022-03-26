import React from 'react';
import { Image } from 'react-bootstrap';
import './ShoppingCardItems.css';

const Shop = ({item}) => {
    const {name , price , picture} = item
    return (
        <li className='shoppingCardItem'>
            <Image 
            className='add_product_image'
             src=''   
             alt='image'
            />
        </li>
    );
};

export default Shop;