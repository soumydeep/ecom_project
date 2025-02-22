import IndeterminateCheckBox from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from "./Redux/Slice/cartSlice"
function ProductList(props){
    const {products,modifiedArrayOfProducts}=props;
    const cartProducts=useSelector((store)=>store.cartReducer.cartProduct);
    const dispatch=useDispatch();
    const handleAddProduct=(product)=>{
        dispatch(actions.addToCart(product));
    }
    const handleDeleteProduct=(product)=>{
        dispatch(actions.deleteFromCart(product));
    }
    
    
    return(
        <>
        
        {
                    products === null?<h3>....loading</h3>:
                    <>
                    {
                        products.map((product)=>{
                            return (
                                <div className="product">
                                    <img src={product.image} alt="" className="product_image"></img>
                                    <div className="product_meta">
                                        <p className="product_title">Title:{product.title}</p>
                                        <p className="price">Price:{product.price}</p>

                                    </div>

                                    <div className="add_to_cart_container">
                                        <IndeterminateCheckBox onClick={()=>{handleDeleteProduct(product)}}></IndeterminateCheckBox>
                                        <div className="currentCartCount">
                                            <PrintCount cartProducts={cartProducts} id={product.id}></PrintCount>
                                            
                                        </div>
                                        <AddBoxIcon onClick={()=>{handleAddProduct(product)}}></AddBoxIcon>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </>
                    
                }

        </>

    )
}

function PrintCount(props){

    const {cartProducts,id}=props;

    let Qunatity=0;

    for(let i=0;i<cartProducts.length;i++){
        console.log(cartProducts[i].individualQuantity)
        if(cartProducts[i].id===id){
            Qunatity=cartProducts[i].individualQuantity;
            console.log("Quantity",Qunatity,)
        }
    }

    return <>{Qunatity}</>
}
export default ProductList