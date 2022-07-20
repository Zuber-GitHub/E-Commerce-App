import React,{ useState } from "react";
import CartContext from "./cart-contetxt";
const CartProvider = props =>{
    
    let [isItems, setIsItems] = useState([]);
    const addItemHandler= (item)=>{
        const filteredList = isItems.filter((lst)=>lst.title===item.title);
        if(filteredList.length!=0){
            isItems.forEach(itm=>{ 
                if(itm.title==filteredList[0].title){
                    itm.quantity+=1;
                }
            })
            setIsItems([...isItems])
        }
        else{ setIsItems([...isItems, item])};
       
    };
    

    const removeItemHandler = (item)=>{
        const filteredList = isItems.filter((lst)=>lst.title===item.title);
        for( let i = 0; i < isItems.length; i++){ 
    
            if ( isItems[i] === filteredList[0]) { 
        
                isItems.splice(i, 1); 
            }
        
        }
        setIsItems([...isItems])
   



 
        
    };

    const purchaseItemHandler = ()=>{
        alert(`Purchase Successful, Thank you for Shopping!!`)
        setIsItems([]);
    }
    const minusItemHandler = (item)=>{
        const filteredList = isItems.filter((lst)=>lst.title===item.title);
        isItems.forEach((itm)=>{
            if(itm.quantity>1){
                if(itm.title===filteredList[0].title){
                    itm.quantity-=1;
                }
                setIsItems([...isItems])
            }
            else{
                removeItemHandler(item);
            }
        })
    }
    const plusItemHandler=(item)=>{
        addItemHandler(item);

    };
    const cartContext = {
        items:isItems,
        totalAMount:0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        purchaseItem:purchaseItemHandler,
        minusItem:minusItemHandler,
        plusItem:plusItemHandler
    };
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    );

};

export default CartProvider;