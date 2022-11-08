import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";
import { SliderItems } from "../data";
import { mobile } from "../responsive";
const Container=styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden ;
${mobile({display:"none"})}
`;
const Arrow=styled.div`
width: 50px;
height: 50px;
background-color: #fff7ff;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position:absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction=== "left"&& "10px"};
right: ${props=> props.direction=== "right"&& "10px"};
margin: auto;
cursor:pointer;
opacity: 0.5;
z-index: 2;

`
const Wrapper=styled.div` 
display: flex;
transform: translateX(${(props)=>props.SliderIndex *-100}vw);
transition: all 1.5s ease;
`
const Slide= styled.div` 
width: 100vw;
height: 100vh;
display:flex;
align-items:center;
background-color: #${props=>props.bg};
`
const ImgContainer= styled.div`
height: 100%;
padding: 50px;
flex: 1;
`
const Image= styled.img`
height: 90% ;
padding: 10px;
`
const InfoContainer= styled.div`
flex: 1;
`
const Title=styled.h1` 
font-size:70px;`
const Des=styled.p` 
margin:50px 0px;
font-size:20px;
font-weight: 1000;
letter-spacing: 6px;
`

const Button=styled.button`
padding:10px;
font-size:20px;
font-weight: 700;
background-color:transparent;
cursor: pointer;`

const Slider = () => {
    const [SliderIndex,setSliderIndex]=useState(0);
    const handleClick=(direction)=>{
        if (SliderIndex=="left"){
            setSliderIndex(SliderIndex>0?SliderIndex-1:2)
        }
        else{
            setSliderIndex(SliderIndex < 2 ?    SliderIndex + 1:0);
        }
    }
   
  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleClick("left")}>
        <ArrowLeftIcon/>
        </Arrow>
        <Wrapper SliderIndex={ SliderIndex}>
        { SliderItems.map((item)=>(
 
 <Slide bg={item.bg} key={item.id} >
 <ImgContainer>
 <Image src={item.img}/>
 </ImgContainer>
 <InfoContainer>
     <Title>{item.title}</Title>
     <Des>{item.des}</Des>
     <Button>Shop Now</Button>
 </InfoContainer>
 </Slide>
       ) ) }
        </Wrapper>
        <Arrow direction='right' onClick={()=>handleClick("right")}>
        <ArrowRightIcon/>
        </Arrow>
        </Container>
  )
}
;
export default Slider