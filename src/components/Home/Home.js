import React, { useEffect, useState } from 'react';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css';


const Home = () => {
    const [addToCardProduct , setAddToCardProduct] = useState([])

    const [allData , setAllData] = useState([])
    useEffect(()=>{
        fetch('Data.js')
        .then(response => response.json())
        .then(data => setAllData(data))
    },[])
    console.log(allData);

    const handleAddToCard = (product)=> {
        setAddToCardProduct([...addToCardProduct , product])
    }


    return (
        <div className='product_card_wrapper'>
           <div className="product">
           {
                 allData.map(product => <SingleCard handleAddToCard={handleAddToCard} key={product.id} product={product} /> )   

                }
           </div>
           <div className="shoppingCardWrapper">
               <ShoppingCard addToCardProduct={addToCardProduct}  setAddToCardProduct={setAddToCardProduct}/>
           </div>
        </div>
    );
};

export default Home;