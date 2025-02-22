import React from "react";
import { usePaginationContext } from "./Context/PaginationContext";


function Categories(props){
    const {categories,setCurrCategories}=props;

    const { setPageNum } = usePaginationContext();



    return (
        <>
        <button className="category_option"
        onClick={()=>{
            setCurrCategories("All Categories")
        }}
        >All Categories
        </button>

        {
            categories.map((category)=>{
              return  <button 
              key={category}
                className="category_option"
                onClick={()=>{
                    setCurrCategories(category)
                    setPageNum(1);
                }}
                >{category}</button>
            })
        }
        </>
    )
    
}

export default Categories
