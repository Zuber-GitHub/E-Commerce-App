import Header from "./Layout/Header";
import PageSummary from "./UI/PageSummary";
import Store from "./Components/Store/Store";
import Footer from "./Layout/Footer";
import Cart from "./Components/Cart/Cart";
import React,{useContext, useState} from "react";
import CartContext from "./Components/Context/cart-contetxt";
import { Redirect, Route,Switch,useHistory } from "react-router-dom";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import ProductDetails from "./Components/Pages/ProductPages/ProductDetail";
import LoginPage from "./Components/Pages/ProductPages/LoginPage";

function App() {
  const history = useHistory();
  const cartCtx = useContext(CartContext);
  const [cartClicked, setCartClicked] = useState(false);
  const [product, setProduct] = useState({});
  const cartDisplayHandler = () => {
    setCartClicked(true);
  };

  const cartDisplayHider = () => {
    setCartClicked(false);
  };


  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      key: Math.random().toString(),
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      key: Math.random().toString(),
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      key: Math.random().toString(),
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      key: Math.random().toString(),
    },
  ];

  function productDetails(productObj){
    setProduct(productObj);
    
  };

  return (
    <>
      
        <Header onClose={cartDisplayHandler}></Header>
        <Switch>
              <Route path='/Home'>
              {cartClicked && <Cart onClose={cartDisplayHider}></Cart>}
              <PageSummary></PageSummary>
              <div> <Home/></div>
              </Route>

         <Route path="/Store" exact>
          {cartCtx.isLoggedIn && <> <PageSummary></PageSummary>
           <Store storeItems={productsArr} productDetails={productDetails}></Store>
           {cartClicked && <Cart onClose={cartDisplayHider}></Cart>}</>}
           </Route>
           

          <Route path="/About">
            <div>
              {'Helper'}<About></About>
            </div>
            
          </Route>
              <Route path='/Contact'>
                <Contact></Contact>
                {cartClicked && <Cart onClose={cartDisplayHider}></Cart>}
              </Route>
              <Route path={`/Store/${product.title}`}>
                <ProductDetails renderWhat = {product}/>
                {cartClicked && <Cart onClose={cartDisplayHider}></Cart>}

              </Route>

       <Route path='/Login'>
                <LoginPage></LoginPage>
              </Route>
        </Switch>
    
        <Footer></Footer>
      
    </>
  );
}

export default App;
