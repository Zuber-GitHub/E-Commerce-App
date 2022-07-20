import React, { useContext } from "react";
import Card from "../../UI/Card";
import "./Cart.css";
import CartContext from "../Context/cart-contetxt";

const Cart = (Props) => {
  const cartCtx = useContext(CartContext);
  const cartLength = cartCtx.items.length
  const cartItems = (
    <ul className="mainUl">
      <span className="cartHeader">
        <span className="tpq">ITEM</span>
        <span className="tpq">PRICE</span>
        <span className="tpq">QUANTITY</span>
      </span>
      {cartCtx.items.map((item) => (
        <li key={Math.random().toString()} className="singleList">
          <img src={item.imageUrl} alt="Album Image" className="cartImages" />
          <div className="tpq1">{item.title}</div>
          <div className="tpq1">{item.price}</div>
          <div className="tpq1">{item.quantity}</div>
          <button className="tpq2" style={{backgroundColor:'skyblue'}}onClick={()=>{return cartCtx.plusItem({title:item.title})}}>+</button>
          <button className="tpq2" onClick={()=>{return cartCtx.minusItem({title:item.title})}}>-</button>
          <button className="removeButton" onClick={()=>{return cartCtx.removeItem({title:item.title})}}>Remove</button>
        </li>
      ))}
    </ul>
  );

  return (
    <Card>
      <div className="cartName">CART</div>
      <button className="closeCart" onClick={Props.onClose}>
        X
      </button>
      {cartItems}
      <div className="totalCost">
        <div className="totalCostText">
          {cartCtx.items.reduce((accumulator, curItem) => {
            return accumulator + curItem.quantity;
          }, 0) == 0
            ? "Cart is Empty"
            : `Total Cost: Rs ${cartCtx.items.reduce((accumulator, curItem) => {
                return accumulator + curItem.quantity * curItem.price;
              }, 0)}`}
        </div>
      </div>
      {cartLength>0 && <button className="purchase" onClick={cartCtx.purchaseItem}>Purchase</button>}
    </Card>
  );
};

export default Cart;
