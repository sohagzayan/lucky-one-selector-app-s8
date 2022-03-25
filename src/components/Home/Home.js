import React, { useEffect, useState } from 'react';
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
               <h2>Product</h2>
               {allData.map((item)=> <img src={item.picture} alt="" /> )}
           </div>
           <div className="shoppingCard">
           <h2>shopping Card</h2>
           </div>
        </div>
    );
};

export default Home;