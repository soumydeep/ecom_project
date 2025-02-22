import React, { useEffect, useState } from "react";
import basicOps from "./Utility/basicOps";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Categories from "./Categories";
import ProductList from "./ProductList";
import { usePaginationContext } from "./Context/PaginationContext";



const ASCENDING_ORDER_SORTING=1;
const DECENDING_ORDER_SORTING=-1;


function Home(){

    const[searchTerm,setSearchTerm]=useState("");
    const[products,setProducts]=useState(null);
    const[sortDirection,setSortDirection]=useState();

    const[categories,setCategories]=useState([]);
    const[currCategories,setCurrCategories]=useState("All Categories")

    const{pageSize,pageNum,setPageSize,setPageNum}=usePaginationContext();




    useEffect(()=>{
        (async function () {
            const response= await fetch(`https://fakestoreapi.com/products`);
            const productData=await response.json();

            setProducts(productData);
        })()
    },[])


    useEffect(()=>{
        (async function () {
            const response=await fetch(`https://fakestoreapi.com/products/categories`);
            const categoriesData=await response.json();
            setCategories(categoriesData);
        })();

    },[])

    let object=basicOps(products,searchTerm,sortDirection,currCategories,pageNum,pageSize);
    //let modifiedArrayOfProducts=basicOps(products,searchTerm,sortDirection,currCategories,pageNum,pageSize);
    let modifiedArrayOfProducts=object.modifiedArray!=null? object.modifiedArray:[];
    let totalPage=object.totalPages;
    return (
        <>
            <header className="nav_wrapper">
            <div className="search_sortWrapper">
            <input className="search_input" type="text" value={searchTerm} onChange={(event)=>{
                console.log("inside change")
                setSearchTerm(event.target.value);
            }}></input>

            <div class="icon_container">
                <ArrowCircleUpIcon style={{color:'white'}} fontSize="large" onClick={()=>{
                    setSortDirection(ASCENDING_ORDER_SORTING);
                    console.log("asc");
                }} />
                 <ArrowCircleDownIcon style={{color:'white'}} fontSize="large" onClick={()=>{
                    setSortDirection(DECENDING_ORDER_SORTING);
                    console.log("dsc");
                }} />

            </div>
            </div>
            <div className="categories_wrapper">
                <Categories
                categories={categories}
                setCurrCategories={setCurrCategories}
                setPageNum={setPageNum}
                >

                </Categories>
            </div>
            </header>

            <main className="product_wrapper">
              <ProductList
                products={modifiedArrayOfProducts}
                modifiedArrayOfProducts={modifiedArrayOfProducts}
              ></ProductList>

            </main>

             <div className="pagination">
                
                <button
                    onClick={()=>{
                        if(pageNum==1){
                            return;
                        }
                        setPageNum((pageNum)=>pageNum-1);
                    }}
                    disabled={pageNum===1?true:false}
                >
                    <KeyboardArrowLeftIcon fontSize="large"></KeyboardArrowLeftIcon>
                </button>
                    {pageNum}
                <button
                    onClick={()=>{
                        if(pageNum== totalPage){
                            return;
                        }
                        setPageNum((pageNum)=>pageNum+1);
                    }}
                    disabled={pageNum===totalPage?true:false}
                >
                    <KeyboardArrowRightIcon fontSize="large"></KeyboardArrowRightIcon>
                </button>
                
            </div> 
            
        </>
    )
}

export default Home