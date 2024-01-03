import React from 'react';
import "./List.scss";
import Card from '../Card/Card';
import useFetch from '../../Hooks/useFetch';
function List({subCategories, maxPrice, sort, categoryId}) {
    const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${categoryId}${subCategories?.map(
        (item)=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)
       
       
        // console.log(sort)

    // console.log(maxPrice)
  return (
   
    <div className='list'>
        {loading ? "loading" : data?.map(item => 
            <Card item={item } id={item.id} />
            )}
    </div>
  )
}

export default List