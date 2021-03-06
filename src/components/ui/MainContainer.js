import React from "react";

const MainContainer = (props) => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-screen max-h-screen overflow-hidden p-4 lg:p-6 bg-gradient-to-br from-red-400 via-red-300 to-red-400">
      {props.children}
    </div>
  );
};

export default MainContainer;
