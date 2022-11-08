
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {useSelector} from "react-redux"
import"react-toastify/dist/ReactToastify.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,Navigate, Link,
} from "react-router-dom";
import Success from './pages/Success';
import { ToastContainer } from 'react-toastify';
function App() {
  // const user=useSelector((state) => state.user.currentUser)
  return (
    
     <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route  path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login"element={<Login />}></Route>
        <Route path="/register" element= {<Register />}></Route>
        <Route path="/success" element={<Success/>}></Route>
      </Routes>
     </Router>
  
  );
}

export default App;
