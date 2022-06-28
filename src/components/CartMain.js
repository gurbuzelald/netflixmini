import React from "react";
import Cart from "./Cart";

const CartMain = (props) => {
  return (
    <div className="row-span-3 flex space-x-6 h-full max-h-full overflow-hidden">
      
      <Cart
        selected={props.selected}
        setSelected={props.setSelected}
        itemsAddedToCart={props.itemsAddedToCart}
        setItemsAddedToCart={props.setItemsAddedToCart}
        detail={props.detail}
        setDetail={props.setDetail}
      />
    </div>
  );
};

export default CartMain;
