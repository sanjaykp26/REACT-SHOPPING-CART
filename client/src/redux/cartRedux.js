import {createSlice} from"@reduxjs/toolkit"
import {toast} from "react-toastify"
const initialState={
    products:localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):[],
    quantity:0,
    total:0,
   
};
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProducts:(state,action)=>{

const itemIndex= state.products.findIndex((item)=>item.id===action.payload.id)

if (itemIndex >= 0){
  state.products[itemIndex] = {
    ...state.products[itemIndex],
    cartQuantity: state.products[itemIndex].cartQuantity + 1,
  };
    toast.info(`increased ${state.products[itemIndex].title} cart quantitiy`,{
        position:"bottom-left"
    })
}else{
    const tempProduct={...action.payload,Cartquantity:1}
    //state.quantity+=1;
      state.products.push(tempProduct);
      toast.success(`${action.payload.title} added to cart`,{
        position:"bottom-left"
    })
}  
localStorage.setItem("products",JSON.stringify(state.products))    
             //state.total+=action.payload.price*action.payload.quantity;
        },
        removeFromCart(state,action){
            const nextCartItem=state.products.filter(
                products=>products.id!==action.payload.id
            )
            state.products=nextCartItem;
            localStorage.setItem("products",JSON.stringify(state.products))
            toast.error(`${action.payload.title} removed from cart`,{
                position:"bottom-left"
            })
        },
        decreaseCart(state, action) {
            const itemIndex = state.products.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (state.products[itemIndex].cartQuantity > 1) {
              state.products[itemIndex].cartQuantity -= 1;
      
              toast.info("Decreased product quantity", {
                position: "bottom-left",
              });
            } else if (state.products[itemIndex].cartQuantity === 1) {
              const nextCartItems = state.products.filter(
                (item) => item.id !== action.payload.id
              );
      
              state.products = nextCartItems;
      
              toast.error("Product removed from cart", {
                position: "bottom-left",
              });
            }
      
            localStorage.setItem("products", JSON.stringify(state.products));
          },
        
    }
  
})

export const {addProducts,removeFromCart,decreaseCart}=cartSlice.actions
export default cartSlice.reducer;