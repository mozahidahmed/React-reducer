import React, {createContext, useContext, useEffect, useReducer, useState } from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import { initialState, ProductReducer } from '../state/ProductState/ProductReducer';
const PRODUCT_CONTEXT=createContext();


const ProductsProvider = ({children}) => {
const [data,setData]=useState([]);
const [state,dispatch]=useReducer(ProductReducer,initialState)
console.log(state)


useEffect(()=>{
    dispatch({type:actionTypes.FETCHING_START})
    fetch("product.json")
    .then((res)=>res.json())
    .then((data)=>dispatch({type:actionTypes.FETCHING_SUCCESS,payload:data}))
    .catch(()=>{
        dispatch({type:actionTypes.FETCHING_ERROR});
    })
},[])

const value ={
    state,
    dispatch
}




    return <PRODUCT_CONTEXT.Provider value={value}>
        {children}
    </PRODUCT_CONTEXT.Provider>
};

export const useProducts=()=>{
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}

export default ProductsProvider;