import React from "react";

const DetailForm = (props) => {
  return (
    <form className="grid grid-cols-1 gap-4 w-full overflow-hidden">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="isim"
            className="block text-sm font-medium text-gray-700"
          >
            Detail
          </label>
          <label>{props.data.detail}</label>
        </div>
      </div>
    </form>
  );
};

export default DetailForm;
