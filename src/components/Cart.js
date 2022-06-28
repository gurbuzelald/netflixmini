import React from "react";
import SelectedItem from "./SelectedItem";

const Cart = (props) => {
  return (
    <div className="card relative w-full">
      <SelectedItem
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

export default Cart;
