import React from "react";
import ProductList from "./ProductList";
import {useSelector} from 'react-redux'

function Cart(){
    const cartProductList=useSelector((store)=>store.cartReducer.cartProduct);
    return (
        <div>
            <h2>Add to cart</h2>
            <div>
                <ProductList products={cartProductList}></ProductList>
            </div>
        </div>
    )
}

export default Cart