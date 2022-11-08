import { useEffect, useState } from "react"
import styled from "styled-components"

import Product from "./Product"
import axios from "axios"
const Container=styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Products = ({cat,filters,Sort}) => {
  const [products,Setproducts]=useState([]);
  const [filterProducts,SetFilterProducts]=useState([]);
  useEffect(()=>{
const getProducts=async()=>{
  try{
const res =await axios.get(cat?`http://localhost:5000/api/products?Category=${cat}`:"http://localhost:5000/api/products");
Setproducts(res.data)
  }catch(err){} 
}
getProducts();
  },[cat])


  useEffect(()=>{
    cat && SetFilterProducts(
      products.filter((item)=>Object.entries(filters).every(([key,value])=>
      item[key].includes(value)
      ))
    )

  },[products,cat,filters])


  useEffect(()=>{
    if(Sort==="Newest"){
      SetFilterProducts((prev)=>
        [...prev].sort((a,b)=>a.createdAt -b.createdAt)
        )
    }else if(Sort==="asc"){
      SetFilterProducts((prev)=>
        [...prev].sort((a,b)=>a.price -b.price)
        )
    } else{
      SetFilterProducts(prev=>
        [...prev].sort((a,b)=>b.price-a.price)
        )
    }
  },[Sort])
  return ( 
    <Container>
        {cat?filterProducts.map((item)=>(
<Product item={item} key={item.id}/>
      )):products.slice(0,8).map((item)=>(
        <Product item={item} key={item.id}/>
              ))}

    </Container>
  )
}

export default Products