import React, { useEffect, useState } from 'react';
import ErrorMaximumAdding from '../Error/ErrorMaximumAdding';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css';


const Home = () => {
    const [addToCardProduct , setAddToCardProduct] = useState([])
    const [maximumAddingError, setMaximumAddingError ] = useState(false)
    const [allData , setAllData] = useState([])
    useEffect(()=>{
        fetch('Data.js')
        .then(response => response.json())
        .then(data => setAllData(data))
    },[])
    // console.log(allData);

    const handleAddToCard = (product)=> {
       if(addToCardProduct.find(pro => pro.id === product.id)){
        setMaximumAddingError(true)
       }else{
        if(addToCardProduct.length >= 4){
            console.log('full adding product');
            setMaximumAddingError(true)
        }else{
            setAddToCardProduct([...addToCardProduct , product])
            console.log('adding');
           }
       }
    }


    return (
        <div className='product_card_wrapper'>
            <ErrorMaximumAdding maximumAddingError={maximumAddingError} setMaximumAddingError={setMaximumAddingError} textBox={{title : "Error" , errorSMS: "You Can Adding Maximum 4 item . please you can go next steps"}} />
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