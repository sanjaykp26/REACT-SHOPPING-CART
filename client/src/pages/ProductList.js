import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'
const Container=styled.div``

const Title=styled.h1`
margin:20px;`

const FilterContainer=styled.div`
display:flex;
justify-content: space-between;
`

const Filter=styled.div`
margin:20px;
${mobile({width:"0px 20px",display:"flex",flexDirection:"column"})};

`


const FilterText=styled.span`
font-size:20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight:"0px"})};

font-weight:600;`
const Option=styled.option``

const Select=styled.select`
padding:10px;
margin-right:20px;
${mobile({margin:"10px 0px"})};
`




const ProductList = () => {
  const location=useLocation();
  const cat=location.pathname.split("/")[2]
  const [filters,Setfilters]=useState({});
  const [Sort,SetSort]=useState("newest");
  const handleFilters=(e)=>{
    const value=e.target.value;
    Setfilters({
      ...filters,
      [e.target.name]:value,

    })
  } 
  return (
    <Container>
      <Navbar/>
    
    <Title>{cat}</Title>
    <FilterContainer>
      <Filter><FilterText>Filter Products:</FilterText>
      <Select name='color' onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>pink</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
      </Filter>
      <Filter><FilterText>Sort Products:</FilterText>
      <Select onChange={(e)=>SetSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select></Filter>
    </FilterContainer>
    <Products cat={cat}filters={filters}Sort={Sort}/>
  
    <Footer/>
    </Container>
  )
}

export default ProductList