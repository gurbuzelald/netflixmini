import React, { useState } from "react";
import CartMain from "../../../../../components/CartMain";
import Films from "../../../../../components/Films";

const HomeTabContent = (props) => {
  const [selectedItem, setSelectedItem] = useState(null); // secili urun
  const [itemsAddedToCart, setItemsAddedToCart] = useState([]);
  const [detail, setDetail] = useState("");

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-5 lg:grid-rows-1 gap-4 h-full max-h-full overflow-hidden">
        <Films
          data={props.data}
          setData={props.setData}
          selected={selectedItem}
          setSelected={setSelectedItem}
        />
          <CartMain
          selected={selectedItem}
          setSelected={setSelectedItem}
          itemsAddedToCart={itemsAddedToCart}
          setItemsAddedToCart={setItemsAddedToCart}
          detail={detail}
          setTotalPrice={setDetail}
        />
        
        
        
      </div>
      
    </>
  );
};

export default HomeTabContent;
