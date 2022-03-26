import React, { useEffect, useState } from 'react';
import ErrorMaximumAdding from '../Error/ErrorMaximumAdding';
import SameProductMultipleAddError from '../Error/SameProductMultipleAddError';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css';


const Home = () => {
    const [addToCardProduct , setAddToCardProduct] = useState([])
    const [maximumAddingError, setMaximumAddingError ] = useState(false)
    const [DublicatAddError, setDublicatAddError ] = useState(false)
    const [allData , setAllData] = useState([])
    useEffect(()=>{
        fetch('Data.js')
        .then(response => response.json())
        .then(data => setAllData(data))
    },[])
    // console.log(allData);

    const handleAddToCard = (product)=> {
       if(addToCardProduct.find(pro => pro.id === product.id)){
        console.log("alredy Added this");
        setDublicatAddError(true)
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
            <SameProductMultipleAddError DublicatAddError={DublicatAddError} setDublicatAddError={setDublicatAddError} />
            <ErrorMaximumAdding maximumAddingError={maximumAddingError} setMaximumAddingError={setMaximumAddingError} />
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