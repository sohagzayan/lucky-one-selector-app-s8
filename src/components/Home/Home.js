import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css';


const Home = () => {
    const [allData , setAllData] = useState([])
    useEffect(()=>{
        fetch('Data.js')
        .then(response => response.json())
        .then(data => setAllData(data))
    },[])
    console.log(allData);


    return (
        <div className='product_card_wrapper'>
           <div className="product">
           {
                 allData.map(product => <SingleCard product={product} /> )   

                }
           </div>
           <div className="shoppingCard">
             <h2>shopping card</h2>
           </div>
        </div>
    );
};

export default Home;