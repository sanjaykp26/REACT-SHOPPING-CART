const express =require("express")
const cors=require("cors")
const app =express();
app.use(cors());
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const productRoute=require("./routes/product")
const cartRoute=require("./routes/cart")
const orderRoute=require("./routes/order")
const stripeRoute=require("./routes/stripe")
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBconnection successfull"))
.catch((err)=>{
    console.log(err);
});
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);



app.listen(process.env.PORT || 5000,()=>{
    console.log("backend server is running");
})