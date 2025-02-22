import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({

    name:"cartSliceName",
    initialState:{
        cartQuantity:0,
        cartProduct:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const ProductToBeAdded=action.payload;
            if(ProductToBeAdded === undefined || ProductToBeAdded === null){
                console.log("Product is not there");
                return;
            }

            state.cartQuantity++;
            const cartProduct=state.cartProduct.find((currentProduct)=>currentProduct.id===ProductToBeAdded.id)

            if(cartProduct!=undefined){
                cartProduct.individualQuantity++;
                console.log(cartProduct.individualQuantity);
            }else{
                console.log("cartProduct",state.cartProduct);
                ProductToBeAdded.individualQuantity=1;
                state.cartProduct.push(ProductToBeAdded);
                
            }
            
        },
        deleteFromCart:(state,action)=>{
            const productToBeDeleted=action.payload;
            if(productToBeDeleted === undefined || productToBeDeleted===null){
                console.log("something fishy while deleting the product");
                return;
            }
           
            const deletedProductidx=state.cartProduct.findIndex((currProduct)=>currProduct.id===productToBeDeleted.id);

            if(deletedProductidx != -1){
                state.cartQuantity--;
                let currproduct=state.cartProduct[deletedProductidx];
                if(currproduct.individualQuantity===1){
                    state.cartProduct.splice(deletedProductidx,1);
                }else{
                    currproduct.individualQuantity--;
                }
            }
        }
    }
});

export const actions=cartSlice.actions;
export default cartSlice;