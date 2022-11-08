import React from 'react'
import {mobile} from '../responsive'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Container = styled.div`
height: 60px;
${mobile({height:"50px"})}
background-color: whitesmoke;

`;
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-items: center;
justify-content: space-between;
${mobile({padding:"10px 0px"})}
`
    ;
const Left = styled.div`
flex: 1;
display: flex;
`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Language= styled.span`
font-size: 14px;
padding: 10px;
cursor: pointer;
${mobile({display:"none"})}
`
const SearchConatiner=styled.div`
border:0.5px solid lightgray;
display:flex;
margin-left:25px;
align-items: center;
padding:5px;`
const Input=styled.input` 
border: none;
width: 200px;
${mobile({width:"50px"})}
`;
const Logo =styled.h1`
font-weight: bold;
${mobile({fontSize:"24px"})}
`
const Right = styled.div`
flex: 1;
display:flex;
justify-content:flex-end;
${mobile({flex:2,justifyContent:"center"})}`

const MenuItem= styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize:"12px",marginLeft:"10px"})}
`
const Navbar = () => {
    const quantity=useSelector(state=>state.cart.Cartquantity)
    
    return (
        <Container><Wrapper>
            <Left><Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
        <Link to="/login"><MenuItem>SIGN IN</MenuItem></Link>    
                {/* <Language>EN</Language>
                <SearchConatiner>
                <Input placeholder='search'/>
                    <SearchIcon style={{color:'gray', FontSize:16}}/>
                </SearchConatiner> */}
            </Left>
            <Center><Logo>SHOPPING CART</Logo></Center>
            
            <Right>
               <Link to="/cart">
                    <MenuItem>
                    
                <Badge badgeContent={quantity} color="primary">
          <ShoppingCartIcon/>
        </Badge>
                </MenuItem>
                
               </Link>
               </Right>
        </Wrapper></Container>
    )
}

export default Navbar