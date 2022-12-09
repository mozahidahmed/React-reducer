import React from 'react';
import { useProducts } from '../context/ProductsProvider';
import Card from './Card';

const GetData = () => {
    const {state:{products,loading,error}}=useProducts();
  

   
    
      let content;
    
      if (loading) {
        content = <p>Loading</p>;
      }
    
      if (error) {
        content = <p>Something went wrong</p>;
      }
    
      if (!loading && !error && products.length === 0) {
        content = <p>Nothing to show, product list is empty</p>;
      }
    
      if (!loading && !error && products.length) {
        content = products.map((product) => (
            products.map((product)=><Card product={product}></Card>)
        ));
      }

    

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
    );
};

export default GetData;