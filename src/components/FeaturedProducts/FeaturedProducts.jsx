import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
// import { useState } from 'react';
// import { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
// import axios from "axios";

const FeaturedProducts = ({type}) => {

    
    const{data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className="bottom">
            
            {error 
             ? "Something went Wrong!!"
          
             : loading ? "loading" 
             
             : data?.map(item => (
                <Card item={item} key={item.id}/>
            ))
            }
        </div>
    </div>
  )
}

export default FeaturedProducts;