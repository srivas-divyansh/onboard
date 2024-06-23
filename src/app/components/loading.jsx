import React from "react";

const Loading = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#DD7A29]">
    <div className="border-t-4 border-b-4 border-[#fcfcfc] rounded-full w-12 h-12 animate-spin"></div>
  </div>
);

export default Loading;
