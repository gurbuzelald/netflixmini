import React from "react";
import StocksTable from "../../../../../components/StocksTable";

const StocksTabContent = (props) => {
  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="card flex items-end h-full w-full p-0 space-y-0 overflow-hidden">
        <StocksTable data={props.data} setData={props.setData} />
      </div>
    </div>
  );
};

export default StocksTabContent;
