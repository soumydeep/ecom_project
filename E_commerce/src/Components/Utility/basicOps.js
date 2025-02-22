
const searchItem= (arrayOfProducts,searchTerms)=>{
    let modifiedArrayOfProducts=arrayOfProducts;
    if(searchItem !=""){
        modifiedArrayOfProducts=modifiedArrayOfProducts.filter(product =>{
            let lowerSearchTerm= searchTerms.toLowerCase();
            let lowerCasetitle=product.title.toLowerCase();

            return lowerCasetitle.includes(lowerSearchTerm);
        })
    }
    console.log("inside basic ops")
    return modifiedArrayOfProducts;
}

const sortingOfProduct=(arrayOfProducts,sortDirection)=>{
    let modifiedArray=arrayOfProducts;

    if(sortDirection!=0){
        if(sortDirection==1){
            modifiedArray=modifiedArray.sort((p1,p2)=>{
                return p1.price-p2.price;
            });
        }else{
            modifiedArray=modifiedArray.sort((p1,p2)=>{
                return p2.price-p1.price;
            })
        }
    }
    return modifiedArray;
}

const categorization=(modifiedArray,currentCategories)=>{

    let categoryModifiedArray=modifiedArray;
    const ALL_CATEGORY="All Categories";
    if(currentCategories.localeCompare(ALL_CATEGORY)!=0){
        categoryModifiedArray=categoryModifiedArray.filter((product)=>{
             return product.category==currentCategories;
        })
    }

    console.log(categoryModifiedArray,currentCategories);
    return categoryModifiedArray;
}

const pagination=(arrayOfProducts,pageNum,pageSize)=>{

    let modifiedArray=arrayOfProducts;
    let totalPages=Math.ceil(modifiedArray.length/pageSize);

    let sidx=(pageNum-1)*pageSize;
    let eidx=Math.min(modifiedArray.length-1,sidx+(pageSize-1));

    modifiedArray=modifiedArray.slice(sidx,eidx+1);

    console.log("inside Pagination",totalPages,sidx,eidx,modifiedArray);
    return {modifiedArray,totalPages};

}
export default function basicOps(arrayOfProducts,searchTerms,sortDirection,currentCategories,pageNum,pageSize){
    if(arrayOfProducts === null || arrayOfProducts.length ===0){
        return[];
    }
    let modifiedArray=arrayOfProducts;
    modifiedArray=searchItem(modifiedArray,searchTerms);
    modifiedArray=sortingOfProduct(modifiedArray,sortDirection);
    modifiedArray=categorization(modifiedArray,currentCategories);
    let obj=pagination(modifiedArray,pageNum,pageSize);
    console.log("pagination",obj);


    return obj;
}